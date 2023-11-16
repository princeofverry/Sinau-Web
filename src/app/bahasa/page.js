import React from "react";
import Image from "next/image";
import TranslateJawa from "./components/translate";
import TranslateLatin from "./components/translateLatin";
import GambaranBahasa from "./components/gambar";
import TextBjir from "../ContentMouse";
import AppCarousel from "./components/appCarousel";

const Bahasa = () => {
  return (
    <>
      <div className="bg-[#2C3361] w-full h-screen">
        <TextBjir />
      </div>
      <AppCarousel/>
      <div className="bg-[#212759] text-white py-6">
        <div className="max-w-screen-xl mx-auto my-8">
          <h1 className="text-3xl font-bold text-white text-center">
          &quot;Aksara Jawa&quot;
          </h1>
          <p className="max-w-screen-xl text-lg font-light mx-auto text-center  text-white py-8">
            Warisan budaya Nusantara yang indah dan berharga.
          </p>
          <ul className="flex sm:flex-row flex-col gap-8 justify-center mx-4">
            <li>
              <GambaranBahasa
                source={"/aksaraJawa.png"}
                judul={"AKSARA JAWA"}
              />
            </li>
            <li>
              <GambaranBahasa
                source={"/aksaraSandhangan.png"}
                judul={"AKSARA SANDHANGAN"}
              />
            </li>
            <li>
              <GambaranBahasa
                source={"/aksaraPasangan.png"}
                judul={"AKSARA PASANGAN"}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-screen bg-[#212759] flex justify-center items-center">
        <div className="">
          <TranslateJawa />
          <TranslateLatin />
        </div>
      </div>
    </>
  );
};

export default Bahasa;
