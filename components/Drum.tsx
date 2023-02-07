import React, { useState } from "react";

const Drum = () => {
  const [active, setActive] = useState("");
  const playAudio = (audioId: string, audioPath: string | undefined) => {
    setActive(audioId);
    new Audio(audioPath).play();
  };
  return (
    <>
      <title>Drum Machine</title>
      <link rel="icon" href="/favicon.ico" />

      <div className="flex justify-center items-center h-screen">
        <div
          id="drum-machine"
          className="grid bg-lime-700 w-4/5 lg:w-2/5 justify-items-center gap-5 m-auto rounded-lg border-black border-2 p-10 "
        >
          <div className="text-center">
            <h1 className=" text-6xl">Drum Machine</h1>
          </div>
          <div id="buttons" className="">
            <div className="flex gap-2 pb-2">
              <button
                id="Heater 1"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater-1", "/Heater-1.mp3")}
              >
                Q
              </button>
              <button
                id="Heater 2"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater-2", "/Heater-2.mp3")}
              >
                W
              </button>
              <button
                id="Heater 3"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater-3", "/Heater-3.mp3")}
              >
                E
              </button>
            </div>
            <div className="flex gap-2 pb-2">
              <button
                id="Heater 4"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater-4", "/Heater-4.mp3")}
              >
                A
              </button>
              <button
                id="Clap"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Clap", "/Clap.mp3")}
              >
                S
              </button>
              <button
                id="Open-HH"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Open-HH", "/Open-HH.mp3")}
              >
                D
              </button>
            </div>
            <div className="flex gap-2 pb-2">
              <button
                id="Kick-n'-Hat"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Kick-n'-Hat", "/Kick-n-Hat.mp3")}
              >
                Z
              </button>
              <button
                id="Kick"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Kick", "/Kick.mp3")}
              >
                X
              </button>
              <button
                id="Closed-HH"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Closed-HH", "/Closed-HH.mp3")}
              >
                C
              </button>
            </div>
          </div>
          <div id="display">
            <div className="bg-amber-400 p-3 text-3xl text-center w-60">
              {active}
            </div>
            <h1 className="pt-5">Copyright (c) 2023 Samuel Pokam</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drum;
