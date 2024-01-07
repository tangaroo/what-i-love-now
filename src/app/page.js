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
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 bg-slate-50 sm:pt-8">
      <Head>
        {" "}
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header selected={selected} setSelected={setSelected} />
      <Intro />
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-2 lg:w-full bg-slate-50 lg:max-w-screen-lg m-auto md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2md:px-8 sm:grid-cols-1 sm:px-4">
        <Content selected={selected} />
      </div>
      <Footer />
    </main>
  );
}
