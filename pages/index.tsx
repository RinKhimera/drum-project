import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-300 h-screen">
      <Head>
        <title>Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center pt-6">
        <h1 className=" text-6xl">Drum Machine</h1>
        <h3 className=" text-2xl py-3">Built with love</h3>
      </div>
      <div id="drum-machine">
        <div id="display"></div>
        <div
          className="drum-pad w-24 h-24 flex justify-center items-center bg-red-400"
          id="Heater 1"
        >
          Q
        </div>
        <div className="drum-pad" id="Heater 2">
          W
        </div>
        <div className="drum-pad" id="Heater 3">
          E
        </div>
        <div className="drum-pad" id="Heater 4">
          A
        </div>
        <div className="drum-pad" id="Clap">
          S
        </div>
        <div className="drum-pad" id="Open-HH">
          D
        </div>
        <div className="drum-pad" id="Kick-n'-Hat">
          Z
        </div>
        <div className="drum-pad" id="Kick">
          X
        </div>
        <div className="drum-pad" id="Closed-HH">
          C
        </div>
      </div>
    </div>
  );
};

export default Home;
