import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Head>
          <title>MADAM Store</title>
          <meta name="title" content="MADAM Store" />
          <meta
            name="description"
            content="What is MADAM Store? Ecommerce shop, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
          />

          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://madam-store.vercel.app/" />
          <meta property="og:title" content="MADAM Store" />
          <meta
            property="og:description"
            content="What is MADAM Store? Ecommerce shop, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/Lry3hMk/download.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://madam-store.vercel.app/"
          />
          <meta property="twitter:title" content="MADAM Store" />
          <meta
            property="twitter:description"
            content="What is MADAM Store? Ecommerce shop, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/Lry3hMk/download.png"
          />
        </Head>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
