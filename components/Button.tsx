import React, { useState, useRef, useEffect } from "react";

type ButtonProps = {
  id: string;
  audioPath: string;
  keyTrigger: string;
  name: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  id,
  audioPath,
  keyTrigger,
  name,
  onClick,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioName, setAudioName] = useState("");
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
    setAudioName(name);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
      setAudioName("");
    }, audioRef.current.duration * 1000);
  };

  const buttonClass = isPlaying ? "bg-red-500" : "bg-green-500";

  return (
    <button
      id={id}
      className={`w-16 h-16 rounded-lg border-black border-2 ${buttonClass}`}
      onClick={playSound}
      name={name}
    >
      {keyTrigger}
      <audio id={keyTrigger} src={audioPath} ref={audioRef}></audio>
      {audioName && (
        <div className="bg-amber-400 p-3 text-2xl text-red-600 text-center w-40 absolute top-0">
          {audioName}
        </div>
      )}
    </button>
  );
};

export default Button;
