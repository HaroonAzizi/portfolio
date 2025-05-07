import Head from "next/head";
import CurrencyConverterComponent from "../../components/CurrencyConverter";
import { FaMoneyBillWave } from "react-icons/fa";

export default function CurrencyConverterPage() {
  return (
    <>
      <Head>
        <title>Currency Converter | Haroon Azizi</title>
        <meta
          name="description"
          content="Convert currencies and view historical exchange rates. Focus on AFN, USD, EUR, and more."
        />
        <meta
          name="keywords"
          content="currency converter, exchange rates, afghani, usd, eur, pkr, inr, haroon azizi, financial tools"
        />
        <link
          rel="canonical"
          href="https://haroonazizi.com/tools/currency-converter"
        />
        {/* Add other relevant meta tags like OG tags if desired */}
        <meta property="og:title" content="Currency Converter | Haroon Azizi" />
        <meta
          property="og:description"
          content="Convert currencies and view historical exchange rates. Focus on AFN, USD, EUR, and more."
        />
        <meta
          property="og:url"
          content="https://haroonazizi.com/tools/currency-converter"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://haroonazizi.com/images/og-image.jpg"
        />{" "}
        {/* Replace with a relevant image if you have one */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Currency Converter | Haroon Azizi"
        />
        <meta
          name="twitter:description"
          content="Convert currencies and view historical exchange rates."
        />
        <meta
          name="twitter:image"
          content="https://haroonazizi.com/images/og-image.jpg"
        />{" "}
        {/* Replace with a relevant image */}
      </Head>

      <section className="py-12 md:py-20 bg-theme-primary min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-theme-accent to-theme-accent-light bg-clip-text text-transparent flex items-center justify-center">
                <FaMoneyBillWave className="mr-3" /> Currency Converter
              </span>
            </h1>
            <p className="text-theme-text-muted max-w-2xl mx-auto font-mono">
              <span className="text-theme-accent">const </span>
              <span className="text-theme-accent-light">exchange</span>
              <span className="text-white"> = </span>
              <span className="text-theme-text-muted">
                &quot;Convert currencies and explore historical exchange rate
                data.&quot;
              </span>
            </p>
          </div>
          <CurrencyConverterComponent />
        </div>
      </section>
    </>
  );
}
