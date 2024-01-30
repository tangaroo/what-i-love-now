"use client";
import "./globals.css";

import { useState } from "react";
import Head from "next/head";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";

export default function Home() {
  const [selected, setSelected] = useState("all");

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 p-12 sm:p-4">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Header selected={selected} setSelected={setSelected} />
      <div className="flex-1">
        <Intro />
        <div className="w-full lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2 lg:max-w-screen-2xl m-auto md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 md:px-8 sm:grid-cols-1">
          <Content selected={selected} />
        </div>
      </div>
      <Footer />
    </main>
  );
}