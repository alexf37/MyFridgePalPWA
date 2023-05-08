import { type AppType } from "next/dist/shared/lib/utils";
import BottomNavbar from "~/components/BottomNavbar";
import Header from "~/components/Header";
import Head from "next/head";
import type { GlobalState, PantryItem } from "~/types/global";
import { useState } from "react";

import "~/styles/globals.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Inter } from "next/font/google";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [appState, setAppState] = useState<GlobalState>({
    myPantry: [
      {
        id: 1,
        name: "Bok Choy",
        daysLeft: 2,
        img: "https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg?crop=0.752xw:1.00xh;0.141xw,0&resize=1200:*",
        type: "Ingredient",
        forSale: false,
      },
    ],
  });

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
      <main className="flex h-full flex-col bg-white">
        <Header />
        <Component
          {...pageProps}
          appState={appState}
          setAppState={setAppState}
        />
        <BottomNavbar />
      </main>
    </>
  );
};

export default MyApp;
