"use client";
import React, {useState} from "react";
import { Howl, Howler } from "howler";
import Telefono from "../assets/Telefonos.mp3";
import Disparos from "../assets/disparos.mp3";
import Besame from "../assets/BesameMucho.mp3";
import PuertayPasos from "../assets/PuertayPasos.mp3";
import Bomba from "../assets/bomba.mp3";

const sounds = {
    Telefonos: new Howl({ src: [Telefono] }),
    Telefonos2: new Howl({ src: [Telefono] }),
    Disparos: new Howl({ src: [Disparos] }),
    Disparos2: new Howl({ src: [Disparos] }),
    Besame: new Howl({ src: [Besame] }),
    Besame2: new Howl({ src: [Besame] }),
    Besame3: new Howl({ src: [Besame], volume: 1.0 }),
    Besame3Alto: new Howl({ src: [Besame], volume: 1.5 }), // Volumen alto
    Besame3Bajo: new Howl({ src: [Besame], volume: 0.5 }),
    Puerta: new Howl({ src: [PuertayPasos] }),
    Bomba: new Howl({ src: [Bomba] }),
    // Agrega más sonidos aquí
  };


const ButtonSound = ({ soundName }) => {
    const sound = sounds[soundName];
    const [isPlaying, setIsPlaying] = useState(false);
  
    const playPauseSound = () => {
      if (sound) {
        if (isPlaying) {
          sound.pause();
        } else {
          sound.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

  return (
    <>
      <div className="w-[95%]">
        <button
        className="w-full h-16 bg-blue-500 text-white text-lg font-bold rounded-md p-2 m-2"
        onClick={playPauseSound}
        >
          {isPlaying ? "Pausa" : soundName}
        </button>
      </div>
    </>
  );
};

export default ButtonSound;
