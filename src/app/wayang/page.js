import React from "react";
import Image from "next/image";
import Pandawa from "./components/pandawa";
import Punakawan from "./components/punakawan";
import BackToTop from "../components/utilities/Component/BackToTop";
import Link from "next/link";

const Wayang = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#2C3361]">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
            <div className="typing-text m:text-left font-bold text-[#F2ECBE] py-8 mt-20">
              <h1 className="wayang-animation judul text-xl sm:text-3xl py-4 sm:text-left text-center">
                WAYANG
              </h1>
              <div className="sm:text-left text-white font-[300] text-md sm:text-lg pb-4 text-center">
                Wayang adalah boneka tiruan orang yang terbuat dari pahatan
                kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk
                memerankan tokoh dalam pertunjukan drama tradisional.
              </div>
              <Link href="/penjelasanwayang">
                <div className="flex justify-center sm:justify-start">
                  <button className="bg-[#5260e2] p-2 rounded-md hover:bg-[#48306e] hover:scale-105 transition duration-300 text-base">
                    Explore
                  </button>
                </div>
              </Link>
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
      <BackToTop url={"/wayang"} />
    </>
  );
};

export default Wayang;
