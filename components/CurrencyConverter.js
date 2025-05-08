import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  FaExchangeAlt,
  FaChartLine,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const initialCurrencies = {
  usd: "US Dollar",
  afn: "Afghani",
  eur: "Euro",
  gbp: "British Pound",
  pkr: "Pakistani Rupee",
  inr: "Indian Rupee",
  irr: "Iranian Rial",
  cad: "Canadian Dollar",
  aud: "Australian Dollar",
  jpy: "Japanese Yen",
  cny: "Chinese Yuan",
  aed: "UAE Dirham",
  sar: "Saudi Riyal",
  try: "Turkish Lira",
};

// Currency symbols mapping
const currencySymbols = {
  usd: "$",
  afn: "؋",
  eur: "€",
  gbp: "£",
  pkr: "₨",
  inr: "₹",
  irr: "﷼",
  cad: "C$",
  aud: "A$",
  jpy: "¥",
  cny: "¥",
  aed: "د.إ",
  sar: "﷼",
  try: "₺",
};

// Mapping currency codes to country codes for flags
const currencyToCountryCode = {
  usd: "US",
  afn: "AF",
  eur: "EU",
  gbp: "GB",
  pkr: "PK",
  inr: "IN",
  irr: "IR",
  cad: "CA",
  aud: "AU",
  jpy: "JP",
  cny: "CN",
  aed: "AE",
  sar: "SA",
  try: "TR",
};

// Helper function to get flag emoji from currency code
function getFlagEmoji(currencyCode) {
  const countryCode = currencyToCountryCode[currencyCode.toLowerCase()];
  if (!countryCode) return "";
  // Convert country code to regional indicator symbols
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 0x1f1e6 + char.charCodeAt(0) - "A".charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// API URLs
const primaryCurrenciesListUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json";
const fallbackCurrenciesListUrl =
  "https://latest.currency-api.pages.dev/v1/currencies.min.json";
const primaryRateBaseUrl =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/";
const fallbackRateBaseUrl =
  "https://{date}.currency-api.pages.dev/v1/currencies/";

async function fetchWithFallback(primaryUrl, fallbackUrl, date = "latest") {
  const datedPrimaryUrl = primaryUrl.replace("{date}", date);
  const datedFallbackUrl = fallbackUrl.replace("{date}", date);

  try {
    const response = await fetch(datedPrimaryUrl);
    if (!response.ok) {
      if (!datedPrimaryUrl.includes("/currencies/")) {
        throw new Error(
          `Primary API failed: ${response.statusText} for date ${date}`
        );
      }
      console.warn(
        `Primary API failed (${response.statusText} for ${date}), trying fallback...`
      );
    } else {
      return await response.json();
    }
  } catch (error) {
    console.warn(
      `Primary API fetch failed (${error.message} for ${date}), trying fallback...`
    );
  }

  try {
    const response = await fetch(datedFallbackUrl);
    if (!response.ok)
      throw new Error(
        `Fallback API failed: ${response.statusText} for date ${date}`
      );
    return await response.json();
  } catch (fallbackError) {
    console.error(
      `Fallback API fetch also failed for date ${date}:`,
      fallbackError
    );
    throw new Error(
      `Both primary and fallback APIs failed for date ${date}: ${fallbackError.message}`
    );
  }
}

export default function CurrencyConverterComponent() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("afn");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [availableCurrencies, setAvailableCurrencies] =
    useState(initialCurrencies);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [historyError, setHistoryError] = useState("");
  const [historyLoading, setHistoryLoading] = useState(false);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    async function loadCurrencies() {
      try {
        const fetchedCurrencies = await fetchWithFallback(
          primaryCurrenciesListUrl,
          fallbackCurrenciesListUrl
        );
        if (fetchedCurrencies && Object.keys(fetchedCurrencies).length > 0) {
          // Filter to keep only initialCurrencies if needed, or merge/use all
          const updatedCurrencies = {};
          for (const code in initialCurrencies) {
            if (fetchedCurrencies[code]) {
              updatedCurrencies[code] = fetchedCurrencies[code];
            } else {
              updatedCurrencies[code] = initialCurrencies[code]; // fallback name
            }
          }
          setAvailableCurrencies(updatedCurrencies);
        }
      } catch (err) {
        console.error("Failed to load full currency list:", err);
        setError("Failed to load full currency list. Using defaults.");
      }
    }
    loadCurrencies();

    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);
    setEndDate(today.toISOString().split("T")[0]);
    setStartDate(thirtyDaysAgo.toISOString().split("T")[0]);
  }, []);

  const handleConvert = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid positive amount.");
      setResult("");
      return;
    }
    if (fromCurrency === toCurrency) {
      setResult(
        `${currencySymbols[fromCurrency]}${amount} = ${currencySymbols[toCurrency]}${amount}`
      );
      setError("");
      return;
    }
    setLoading(true);
    setError("");
    setResult("");

    const primaryApiUrl = `${primaryRateBaseUrl}${fromCurrency}.min.json`;
    const fallbackApiUrl = `${fallbackRateBaseUrl}${fromCurrency}.min.json`;

    try {
      const data = await fetchWithFallback(primaryApiUrl, fallbackApiUrl);
      const rate = data[fromCurrency]?.[toCurrency];
      if (rate) {
        const convertedAmount = parseFloat(amount) * rate;
        setResult(
          `${currencySymbols[fromCurrency]}${amount} = ${
            currencySymbols[toCurrency]
          }${convertedAmount.toFixed(4)}`
        );
      } else {
        setError(
          `Could not find rate for ${currencySymbols[fromCurrency]} to ${currencySymbols[toCurrency]}.`
        );
      }
    } catch (err) {
      setError(`Error: ${err.message}. Please try again.`);
      console.error(err);
    }
    setLoading(false);
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getDatesInRange = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);
    const lastDate = new Date(end);
    if (currentDate > lastDate) return [];
    lastDate.setDate(lastDate.getDate() + 1);
    while (currentDate < lastDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const fetchRateForDate = async (date, from, to) => {
    const primaryUrl = `${primaryRateBaseUrl}${from}.min.json`;
    const fallbackUrl = `${fallbackRateBaseUrl}${from}.min.json`;
    try {
      const data = await fetchWithFallback(primaryUrl, fallbackUrl, date);
      if (data && data[from] && data[from][to]) {
        return { date: date, rate: data[from][to] };
      }
      return { date: date, rate: null };
    } catch (error) {
      console.error(`Failed to fetch rate for ${date}: ${error.message}`);
      return { date: date, rate: null };
    }
  };

  const handleShowHistory = async () => {
    if (!fromCurrency || !toCurrency || !startDate || !endDate) {
      setHistoryError("Please select currencies and a valid date range.");
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setHistoryError("Start date cannot be after end date.");
      return;
    }
    if (fromCurrency === toCurrency) {
      setHistoryError("Select different currencies to plot history.");
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
      return;
    }

    setHistoryLoading(true);
    setHistoryError("");

    const dates = getDatesInRange(startDate, endDate);
    if (dates.length === 0 || dates.length > 90) {
      setHistoryError(
        dates.length === 0
          ? "Invalid date range."
          : "Date range too large (max 90 days)."
      );
      setHistoryLoading(false);
      return;
    }

    const ratePromises = dates.map((date) =>
      fetchRateForDate(date, fromCurrency, toCurrency)
    );
    const results = await Promise.allSettled(ratePromises);

    const labels = [];
    const dataPoints = [];
    let errorsOccurred = false;

    results.forEach((result) => {
      if (result.status === "fulfilled" && result.value.rate !== null) {
        labels.push(result.value.date);
        dataPoints.push(result.value.rate);
      } else {
        if (result.status === "fulfilled") {
          // API returned, but no rate
          labels.push(result.value.date);
          dataPoints.push(null); // Show gap
        }
        errorsOccurred = true;
      }
    });

    if (labels.length === 0) {
      setHistoryError(
        "Could not fetch any historical data for the selected range and currencies."
      );
      setHistoryLoading(false);
      return;
    }
    if (errorsOccurred) {
      setHistoryError(
        (prev) => prev + " Note: Some data points could not be fetched."
      );
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: `1 ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`,
              data: dataPoints,
              borderColor: "#7C3AED", // theme-accent
              backgroundColor: "rgba(124, 58, 237, 0.1)",
              tension: 0.1,
              fill: true,
              spanGaps: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              ticks: { color: "#94A3B8" }, // theme-text-muted
              grid: { color: "rgba(148, 163, 184, 0.2)" },
            },
            x: {
              ticks: { color: "#94A3B8" }, // theme-text-muted
              grid: { color: "rgba(148, 163, 184, 0.2)" },
            },
          },
          plugins: {
            legend: { labels: { color: "#F8FAFC" } }, // theme-text
          },
        },
      });
    }
    setHistoryLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-theme-secondary/30 p-6 rounded-lg shadow-lg backdrop-blur-sm">
      {/* Converter Section */}
      <div className="space-y-8">
        <div className="glass-card p-6 md:p-8 border border-theme-accent/10">
          <h2 className="text-2xl font-bold text-theme-text mb-6 text-center flex items-center justify-center">
            {/* <FaMoneyBillWave className="mr-3 text-theme-accent" /> */}
            Currency Converter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-mono text-theme-text-muted mb-2"
                >
                  Amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-theme-text-muted pointer-events-none">
                    {currencySymbols[fromCurrency]}
                  </span>
                  <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="1.00"
                    className="w-full pl-8 pr-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="fromCurrency"
                  className="block text-sm font-mono text-theme-text-muted mb-2"
                >
                  From Currency
                </label>
                <select
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text transition-all duration-200"
                >
                  {Object.entries(availableCurrencies).map(([code, name]) => (
                    <option key={code} value={code}>
                      {getFlagEmoji(code)} {currencySymbols[code]} - {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <button
                onClick={handleSwapCurrencies}
                className="p-3 bg-theme-accent/20 text-theme-accent rounded-full hover:bg-theme-accent/30 transition-all duration-200 transform hover:scale-110"
                title="Swap currencies"
              >
                <FaExchangeAlt size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="toCurrency"
                  className="block text-sm font-mono text-theme-text-muted mb-2"
                >
                  To Currency
                </label>
                <select
                  id="toCurrency"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text transition-all duration-200"
                >
                  {Object.entries(availableCurrencies).map(([code, name]) => (
                    <option key={code} value={code}>
                      {getFlagEmoji(code)} {currencySymbols[code]} - {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-mono text-theme-text-muted mb-2">
                  Result
                </label>
                <div className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg text-theme-text">
                  {result ? (
                    <span className="text-theme-accent font-mono">
                      {result.split("=")[1].trim()}
                    </span>
                  ) : (
                    <span className="text-theme-text-muted">
                      Convert to see result
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="btn-modern w-full mt-8 flex items-center justify-center py-3 text-lg font-medium"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Converting...
              </>
            ) : (
              "Convert"
            )}
          </button>

          {error && (
            <p className="mt-4 text-red-400 text-sm font-mono bg-red-400/10 p-3 rounded-lg">
              {error}
            </p>
          )}
        </div>

        {/* History Section */}
        <div className="glass-card p-6 md:p-8 border border-theme-accent/10">
          <h2 className="text-2xl font-bold text-theme-text mb-6 flex items-center">
            <FaChartLine className="mr-3 text-theme-accent" /> Historical Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-mono text-theme-text-muted mb-2"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block text-sm font-mono text-theme-text-muted mb-2"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-3 bg-theme-secondary/50 border border-theme-accent/20 rounded-lg focus:outline-none focus:border-theme-accent text-theme-text transition-all duration-200"
              />
            </div>
            {/* comment */}
          </div>
          <button
            onClick={handleShowHistory}
            disabled={historyLoading}
            className="btn-modern w-full mb-6 flex items-center justify-center py-3 text-lg font-medium"
          >
            {historyLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading History...
              </>
            ) : (
              <>
                <FaCalendarAlt className="mr-2" /> Show Historical Rates
              </>
            )}
          </button>
          {historyError && (
            <p className="text-red-400 text-sm font-mono bg-red-400/10 p-3 rounded-lg mb-6">
              {historyError}
            </p>
          )}
          <div className="h-[400px] bg-theme-secondary/30 p-4 rounded-lg border border-theme-accent/10">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
