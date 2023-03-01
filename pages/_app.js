import Head from "next/head";
import SideBarLeft from "../components/SideBarLeft/SideBarLeft";
import Header from "../components/Header/Header";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Bao Vuong</title>
        <link rel="icon" href="https://i.imgur.com/5KfSSBJ.png" />
      </Head>
      <main className="font-sans min-h-screen flex items-center">
        <section className="md:px-32 mt-4 mb-6 px-12 bg-transparent grid grid-cols-12 gap-6">
          <div className="lg:col-span-3 col-span-12 text-center dark:bg-slate-900 bg-white rounded-lg border-2 border-blue-200">
            <SideBarLeft />
          </div>
          <div className="lg:col-span-9 col-span-12 dark:bg-slate-900 bg-white flex flex-col rounded-lg border-2 border-blue-200">
            <Header />
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
