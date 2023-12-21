import React from "react";
import TranslateJawa from "../bahasa/components/translate";
import TranslateLatin from "../bahasa/components/translateLatin";
import GambaranBahasa from "../bahasa/components/gambar";
import TextBjir from "../ContentMouse";
// import AppCarousel from "./components/appCarousel";
import BackToTop from "../components/utilities/Component/BackToTop";
// import Wordle from "../Game/wordle";
import Course1 from "../components/Course/components/course1";
import SliderMobile from "../bahasa/components/SliderMobile";

const Bahasa = () => {
  return (
    <>
      <div className="bg-[#2C3361] text-white w-full h-full sm:hidden block text-xl text-center content-center sm:py-8 pt-4 px-4">
        <SliderMobile/>
        <p className="px-4 pb-32">
          Bahasa <span className="text-[#85C2FF] text-2xl">Jawa</span> adalah Bahasa Austronesia di pulau Jawa,
          warisan budaya Indonesia yang kaya makna dan nilai.
        </p>
      </div>
      <div className="bg-[#2C3361] w-full h-screen hidden sm:block">
        <TextBjir />
      </div>
      {/* <AppCarousel /> */}
      <div className="bg-[#2C3361]"></div>
      <div className="bg-[#212759] text-white py-6">
        <div className="max-w-screen-xl mx-auto my-8">
          <h1 className="text-3xl font-bold text-white text-center mt-6">
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
      <div className="w-full h-2/3 bg-[#2C3361] py-16">
        <TranslateJawa />
        <TranslateLatin />
      </div>
      {/* <Wordle/> */}
      <Course1 />
      <BackToTop url={"/Course"} />
    </>
  );
};

export default Bahasa;
