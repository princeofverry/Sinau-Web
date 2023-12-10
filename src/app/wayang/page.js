import React from "react";
import Image from "next/image";
import Pandawa from "./components/pandawa";
import Punakawan from "./components/punakawan";
import BackToTop from "../components/utilities/Component/BackToTop";

const Wayang = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-[#2C3361]"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
            <div className="typing-text m:text-left font-bold text-[#F2ECBE] py-8 mt-20">
              <h1 className="wayang-animation judul text-xl sm:text-3xl py-4 sm:text-left text-center">WAYANG</h1>
              <div className="sm:text-left text-white font-[300] text-md sm:text-lg text-center">
                Wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional.
              </div>
              <div className="relative ">
                <div className="bg-[#5260e2] text-white w-30 h-8 sm:w-32 sm:h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#48306e] text-base hover:shadow-xl">
                  <span className="hover:text-[#FCF5ED]">Explore</span>
                  <span>&#10132;</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex">
              <Image
                src="/bgKesenian.png"
                width={600}
                height={600}
                alt={"..."}
              />
            </div>
          </div>
        </div>
      </div>
      <Pandawa />
      <Punakawan />
       <BackToTop url={"/wayang"}/>
    </>
  );
};

export default Wayang;
