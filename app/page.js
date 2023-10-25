import ButtonSound from "@/components/ButtonSound";
import Image from "next/image";
import Telefono from "../assets/Telefonos.mp3";
import Disparos from "../assets/disparos.mp3";
import Besame from "../assets/BesameMucho.mp3";
import PuertayPasos from "../assets/PuertayPasos.mp3";
import Bomba from "../assets/bomba.mp3";
import Disparo from "../assets/Disparo2.mp3";
import Silvido from "../assets/Silbido.mp3";
import Campanita from "../assets/Campanitas.mp3";
import DisparosFX from "../assets/DisparosFX.mp3";
import ButtonSound2 from "@/components/ButtonSound2";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full text-center">
          <h1 className="mt-4">Escena 1</h1>
        </div>
        <h4>Telefonos de oficina</h4>
        <ButtonSound2 soundName={Telefono} />
        <h4>Disparos</h4>
        <ButtonSound soundName={Disparos} />
        <h4>Besame Mucho</h4>
        <ButtonSound soundName={Besame} />
        <h4>Puerta y pasos</h4>
        <ButtonSound soundName={PuertayPasos} />


        <div className="w-full text-center">
          <h1>Escena 6</h1>
        </div>
        <h4>Disparo accidental</h4>
        <ButtonSound soundName={Disparo} />

        <div className="w-full text-center">
          <h1>Escena 7</h1>
        </div>
        <h4>Telefonos de oficina</h4>
        <ButtonSound2 soundName={Telefono} />
        <h4>Disparos</h4>
        <ButtonSound soundName={Disparos} />
        <h4>Disparos Locos</h4>
        <ButtonSound soundName={DisparosFX} />
        <h4>Besame Silbido</h4>
        <ButtonSound soundName={Silvido} />
        <h4>Campanita</h4>
        <ButtonSound soundName={Campanita} />
        <div className="w-full text-center">
          <h1>Escena 8</h1>
        </div>
        <h4>Besame mucho con volumen</h4>
        <ButtonSound2 soundName={Besame} />
        <h4>Bomba</h4>
        <ButtonSound soundName={Bomba} />
      </div>
    </>
  );
}
