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
      <div className="bg-[#2C3361] w-full h-screen hidden sm:block">
        <TextBjir />
      </div>
      <AppCarousel />
      <div className="bg-[#212759]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2c3361"
            fill-opacity="1"
            d="M0,224L34.3,229.3C68.6,235,137,245,206,213.3C274.3,181,343,107,411,96C480,85,549,139,617,138.7C685.7,139,754,85,823,85.3C891.4,85,960,139,1029,144C1097.1,149,1166,107,1234,101.3C1302.9,96,1371,128,1406,144L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
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
                source={"/AksaraSandhangan.png"}
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
      <div className="w-full h-screen bg-[#212759] pt-4">
          <TranslateJawa />
          <TranslateLatin />
      </div>
    </>
  );
};

export default Bahasa;
