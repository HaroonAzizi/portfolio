// pages/_app.js
import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0F172A" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Haroon Azizi - Software Engineer" />
        <meta
          property="og:description"
          content="Personal portfolio and blog of Haroon Azizi, a software engineer specializing in web and mobile development."
        />
        <meta
          property="og:image"
          content="https://haroonazizi.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://haroonazizi.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@az_haroon" />
        <meta name="twitter:title" content="Haroon Azizi - Software Engineer" />
        <meta
          name="twitter:description"
          content="Personal portfolio and blog of Haroon Azizi, a software engineer specializing in web and mobile development."
        />
        <meta
          name="twitter:image"
          content="https://haroonazizi.com/images/og-image.jpg"
        />
        
        {/* Preload fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          as="style"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </>
  );
}

export default MyApp;
