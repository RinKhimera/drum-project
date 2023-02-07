import React, { useState } from "react";

const Drum = () => {
  const [active, setActive] = useState("");
  const playAudio = (audioId: string, audioPath: string | undefined) => {
    setActive(audioId);
    setTimeout(() => {
      setActive("");
    }, 200);
    new Audio(audioPath).play();
  };
  return (
    <>
      <title>Drum Machine</title>
      <link rel="icon" href="/favicon.ico" />
      <div className="text-center pt-6">
        <h1 className=" text-6xl">Drum Machine</h1>
        <h3 className=" text-2xl py-3">Built with love</h3>
      </div>
      <div className="flex h-3/5">
        <div
          id="drum-machine"
          className="flex bg-lime-700 w-10/12 md:w-1/2 m-auto rounded-lg border-black border-2 p-12 justify-between "
        >
          <div id="buttons">
            <div className="flex gap-2 pb-2">
              <button
                id="Heater 1"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater 1", "/Heater-1.mp3")}
              >
                Q
              </button>
              <button
                id="Heater 2"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater 2", "/Heater-2.mp3")}
              >
                W
              </button>
              <button
                id="Heater 3"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater 3", "/Heater-3.mp3")}
              >
                E
              </button>
            </div>
            <div className="flex gap-2 pb-2">
              <button
                id="Heater 4"
                className="drum-pad text-3xl font-bold w-24 h-24 flex justify-center items-center rounded-md shadow-xl opacity-80 hover:opacity-100 bg-red-400"
                onClick={() => playAudio("Heater 4", "/Heater-4.mp3")}
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
            <div>{active}</div>
          </div>
        </div>
      </div>
    </>
  );
};
