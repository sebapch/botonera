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
    <h1>Escena 2</h1>
  </div>
  <ButtonSound soundName="Telefonos" />
  <ButtonSound soundName="Disparos" />
  <ButtonSound soundName="Besame" />
  <ButtonSound soundName="Puerta" />

  <div className="w-full text-center">
    <h1>Escena 3</h1>
  </div>
  <ButtonSound soundName="Telefonos" />
  <ButtonSound soundName="Disparos" />
  <ButtonSound soundName="Besame" />
  <ButtonSound soundName="Puerta" />
</div>
    </>
  );
}
