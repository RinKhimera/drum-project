import React from "react";
import Button from "./Button";

const Drum = () => {
  const buttons = [
    { id: "Heater-1", audioPath: "/Heater-1.mp3", keyTrigger: "Q" },
    { id: "Heater-2", audioPath: "/Heater-2.mp3", keyTrigger: "W" },
    { id: "Heater-3", audioPath: "/Heater-3.mp3", keyTrigger: "E" },
    { id: "Heater-4", audioPath: "/Heater-4.mp3", keyTrigger: "A" },
    { id: "Clap", audioPath: "/Clap.mp3", keyTrigger: "S" },
    { id: "Open-HH", audioPath: "/Open-HH.mp3", keyTrigger: "D" },
    { id: "Kick-n'-Hat", audioPath: "/Kick-n-Hat.mp3", keyTrigger: "Z" },
    { id: "Kick", audioPath: "/Kick.mp3", keyTrigger: "X" },
    { id: "Closed-HH", audioPath: "/Closed-HH.mp3", keyTrigger: "C" },
  ];

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
              {buttons.map(({ id, audioPath, keyTrigger }) => (
                <Button id={id} audioPath={audioPath} keyTrigger={keyTrigger} />
              ))}
            </div>
          </div>
          <div id="display">
            <div className="bg-amber-400 p-3 text-3xl text-center w-60"></div>
            <h1 className="pt-5">Copyright (c) 2023 Samuel Pokam</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drum;
