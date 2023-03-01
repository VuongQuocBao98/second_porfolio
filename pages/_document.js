import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html class="">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-to-b dark:from-green-500 dark:to-indigo-500 from-[#ec4899] to-[#eab308]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
