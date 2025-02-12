// pages/_app.js
import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Haroon Azizi - Software Engineer" />
        <meta property="og:description" content="Personal portfolio and blog of Haroon Azizi, a software engineer specializing in web and mobile development." />
        <meta property="og:image" content="https://haroonazizi.com/images/og-image.jpg" />
        <meta property="og:url" content="https://haroonazizi.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@az_haroon" />
        <meta name="twitter:title" content="Haroon Azizi - Software Engineer" />
        <meta name="twitter:description" content="Personal portfolio and blog of Haroon Azizi, a software engineer specializing in web and mobile development." />
        <meta name="twitter:image" content="https://haroonazizi.com/images/og-image.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
