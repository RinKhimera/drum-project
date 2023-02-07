import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Drum from "../components/Drum";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-300 h-screen ">
      <Head>
        <title>Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drum />
    </div>
  );
};

export default Home;
