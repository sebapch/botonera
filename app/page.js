import ButtonSound from "@/components/ButtonSound";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="w-full text-center">
          <h1>Escena 1</h1>
        </div>
        <ButtonSound soundName="Telefonos" />
        <ButtonSound soundName="Disparos" />
        <ButtonSound soundName="Besame" />
        <ButtonSound soundName="Puerta" />

        <div className="w-full text-center">
          <h1>Escena 7</h1>
        </div>
        <ButtonSound soundName="Telefonos2" />
        <ButtonSound soundName="Disparos2" />
        <ButtonSound soundName="Besame2" />
        <ButtonSound soundName="Puerta" />

        <div className="w-full text-center">
          <h1>Escena 8</h1>
        </div>

        <ButtonSound soundName="Besame3" />
        <ButtonSound soundName="Besame3Alto" />
        <ButtonSound soundName="Besame3Bajo" />
        <ButtonSound soundName="Bomba" />
      </div>
    </>
  );
}
