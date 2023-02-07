import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-300 h-screen ">
      <Head>
        <title>Drum Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center pt-6">
        <h1 className=" text-6xl">Drum Machine</h1>
        <h3 className=" text-2xl py-3">Built with love</h3>
      </div>
      <div className="">
        <div
          className=" bg-lime-700 w-10/12 lg:w-1/2 m-auto rounded-lg border-black border-2 p-12 "
          id="drum-machine"
        >
          <div id="display"></div>
          <div className="flex gap-2 pb-2">
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Heater 1"
            >
              Q
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Heater 2"
            >
              W
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Heater 3"
            >
              E
            </div>
          </div>
          <div className="flex gap-2 pb-2">
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Heater 4"
            >
              A
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Clap"
            >
              S
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Open-HH"
            >
              D
            </div>
          </div>
          <div className="flex gap-2 pb-2">
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Kick-n'-Hat"
            >
              Z
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Kick"
            >
              X
            </div>
            <div
              className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
              id="Closed-HH"
            >
              C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
