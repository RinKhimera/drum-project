import React, { useState, useRef, useEffect } from "react";

const Button = ({ id, audioPath, keyTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === keyTrigger) {
        playSound();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyTrigger]);

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, audioRef.current.duration * 1000);
  };

  const buttonClass = isPlaying ? "bg-red-500" : "bg-green-500";

  return (
    <button
      id={id}
      className={`w-16 h-16 rounded-lg border-black border-2 ${buttonClass}`}
      onClick={playSound}
    >
      {keyTrigger}
      <audio id={keyTrigger} src={audioPath} ref={audioRef}></audio>
    </button>
  );
};

export default Button;
