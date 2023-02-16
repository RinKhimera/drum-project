import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Drum from "../components/Drum";

const Home: NextPage = () => {
  return (
    <div className=" bg-hero h-screen ">
      <Head>
        <title>Drum Machine</title>
        <meta
          name="description"
          content="Drum Machine bootstrapped with Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drum />
    </div>
  );
};

export default Home;
