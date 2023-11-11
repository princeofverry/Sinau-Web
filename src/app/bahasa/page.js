import React from "react";
import Image from "next/image";
import TranslateJawa from "./components/translate";
import TranslateLatin from "./components/translateLatin";
import GambaranBahasa from "./components/gambar";
import CountUp from "./components/countUp";

const Bahasa = () => {
  return (
    <>
      <div className="w-full mt-16 h-screen bg-[#c08261] text-gray-300 flex justify-center items-center">
        <div className="max-w-[1000px] w-full text-center px-4">
          <h1 className="text-5xl font-bold text-white">"Bahasa Jawa"</h1>
          {/* <CountUp start={0} end={300} /> */}
          <h2 className="text-4xl font-bold text-white py-4">
            Kekayaan Warisan Budaya Indonesia
          </h2>
          <p className="text-base font-extralight text-white">
            Selamat datang di sumber daya pembelajaran bahasa Jawa. Temukan
            keindahan dan sejarah bahasa Jawa yang kaya, serta pelajari cara
            berkomunikasi dalam bahasa ini.
          </p>
        </div>
      </div>
      <div className="bg-[#9A3B3B] text-white py-6">
        <div className="max-w-screen-xl mx-auto my-8">
          <h1 className="text-3xl font-bold text-white text-center">
            "Aksara Jawa"
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
                source={"/aksaraPasangan.png"}
                judul={"PASANGAN"}
              />
            </li>
            <li>
              <GambaranBahasa
                source={"/aksaraSandang.png"}
                judul={"SANDHANGAN"}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-screen bg-[#C08261] flex justify-center items-center">
        <div className="">
          <TranslateJawa />
          <TranslateLatin />
        </div>
      </div>
    </>
  );
};

export default Bahasa;
