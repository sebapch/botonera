'use client'
import React, { useState } from "react";

const ButtonSound2 = ({ soundName }) => {
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (document.getElementById(soundName)) {
      document.getElementById(soundName).volume = newVolume;
    }
  };

  return (
    <>
      <div >
        <audio id={soundName} controls className="w-[100%]">
          <source src={soundName} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="mx-4"
        />
      </div>
    </>
  );
};

export default ButtonSound2;