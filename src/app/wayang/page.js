import React from "react";
import Image from "next/image";
import Pandawa from "./components/pandawa";
import Punakawan from "./components/punakawan";

const Wayang = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-[#2C3361]"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
            <div className="typing-text m:text-left text-5xl font-bold text-[#F2ECBE] py-8 mt-20">
              <h1 className="wayang-animation judul py-4">WAYANG</h1>
              <div className="sm:text-left text-white font-[300] text-lg">
                Wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional.
              </div>
              <div className="relative ">
                <div className="bg-[#5260e2] text-white w-32 h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#48306e] text-base hover:shadow-xl">
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
     
      <div
        className="w-full h-screen bg-[#212759]"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
          <div className="hidden sm:flex">
              <Image
                src="/gamelanBG.png"
                width={600}
                height={600}
                alt={"..."}
              />
            </div>
            <div className="typing-text m:text-left text-5xl font-bold text-[#F2ECBE] py-8 mt-20">
              <h1 className="wayang-animation judul py-4">GAMELAN</h1>
              <div className="sm:text-left text-white font-[300] text-lg">
                Gamelan berasal dari kata “gamel” yang dalam bahasa Jawa artinya memukul atau menabuh, sedangkan akhiran “an” merujuk pada kata benda. Secara keseluruhan bisa dimaknai sebagai seperangkat alat musik yang dimainkan dengan cara dipukul atau ditabuh.
              </div>
              <div className="relative">
                <div className="bg-[#5260e2] text-white w-32 h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#48306e] text-base hover:shadow-xl">
                  <span className="hover:text-[#FCF5ED]">Explore</span>
                  <span>&#10132;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wayang;
