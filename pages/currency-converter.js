import Head from "next/head";
import CurrencyConverterComponent from "../components/CurrencyConverter";
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
          href="https://haroonazizi.com/currency-converter"
        />
        {/* Add other relevant meta tags like OG tags if desired */}
        <meta property="og:title" content="Currency Converter | Haroon Azizi" />
        <meta
          property="og:description"
          content="Convert currencies and view historical exchange rates. Focus on AFN, USD, EUR, and more."
        />
        <meta
          property="og:url"
          content="https://haroonazizi.com/currency-converter"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span
                className="inline-flex items-center justify-center whitespace-nowrap
                               bg-gradient-to-r from-theme-accent to-theme-accent-light
                               bg-clip-text text-transparent"
              >
                <FaMoneyBillWave className="mr-2 text-lg sm:text-xl md:text-2xl" />
                Currency Converter
              </span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg text-theme-text-muted
                            max-w-2xl mb-12 font-mono"
            >
              <span className="text-theme-accent">const </span>
              <span className="text-theme-accent-light">exchange</span>
              <span className="text-white"> = </span>
              <span className="text-theme-text-muted">
                &quot;Convert currencies and explore historical exchange rate
                data.&quot;
              </span>
            </p>
          </div>
          <div className="w-full">
            <CurrencyConverterComponent />
          </div>
        </div>
      </section>
    </>
  );
}
