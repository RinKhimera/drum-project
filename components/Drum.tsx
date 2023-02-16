import React, { useState } from "react";
import Button from "./Button";

const Drum = () => {
  const buttons = [
    {
      id: "Heater-1",
      audioPath: "/Heater-1.mp3",
      keyTrigger: "Q",
      name: "Heater 1",
    },
    {
      id: "Heater-2",
      audioPath: "/Heater-2.mp3",
      keyTrigger: "W",
      name: "Heater 2",
    },
    {
      id: "Heater-3",
      audioPath: "/Heater-3.mp3",
      keyTrigger: "E",
      name: "Heater 3",
    },
    {
      id: "Heater-4",
      audioPath: "/Heater-4.mp3",
      keyTrigger: "A",
      name: "Heater 4",
    },
    { id: "Clap", audioPath: "/Clap.mp3", keyTrigger: "S", name: "Clap" },
    {
      id: "Open-HH",
      audioPath: "/Open-HH.mp3",
      keyTrigger: "D",
      name: "Open HH",
    },
    {
      id: "Kick-n'-Hat",
      audioPath: "/Kick-n-Hat.mp3",
      keyTrigger: "Z",
      name: "Kick n' Hat",
    },
    { id: "Kick", audioPath: "/Kick.mp3", keyTrigger: "X", name: "Kick" },
    {
      id: "Closed-HH",
      audioPath: "/Closed-HH.mp3",
      keyTrigger: "C",
      name: "Closed HH",
    },
  ];

  const [currentAudioName, setCurrentAudioName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = (name: string) => {
    setCurrentAudioName(name);
  };

  const handleAudioPlay = (name: string) => {
    setIsPlaying(true);
    setCurrentAudioName(name);
  };

  return (
    <>
      <title>Drum Machine</title>
      <link rel="icon" href="/favicon.ico" />

      <div className="flex justify-center items-center h-screen">
        <div
          id="drum-machine"
          className="grid w-9/12 lg:w-2/3 2xl:w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 justify-items-center gap-5 rounded-lg border-black border-2 p-5"
        >
          <div className="text-center">
            <h1 className=" text-6xl">Drum Machine</h1>
          </div>
          <div id="buttons" className="">
            <div className="flex flex-wrap justify-center gap-2">
              {buttons.map(({ id, audioPath, keyTrigger, name }) => (
                <Button
                  id={id}
                  audioPath={audioPath}
                  keyTrigger={keyTrigger}
                  name={name}
                  onClick={() => {
                    handleButtonClick(name);
                    handleAudioPlay(name);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="justify-self-end text-lg">
            Copyright (c) 2023 Samuel Pokam
          </div>
        </div>
      </div>
    </>
  );
};

export default Drum;
