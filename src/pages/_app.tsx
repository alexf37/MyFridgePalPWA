import { type AppType } from "next/dist/shared/lib/utils";
import BottomNavbar from "~/components/BottomNavbar";
import Header from "~/components/Header";
import Head from "next/head";

import "~/styles/globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter } from "next/font/google";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MyFridgePal</title>
        <meta name="description" content="MyFridgePal" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
      </Head>
      <main className="flex h-full flex-col bg-gray-50">
        <Header />
        <Component {...pageProps} />
        <BottomNavbar />
      </main>
    </>
  );
};

export default MyApp;
