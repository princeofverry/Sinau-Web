import React from 'react';
import Image from 'next/image';
import Pandawa from "./components/pandawa"; 
import Punakawan from './components/punakawan'; 

const Wayang = () => {
  return (
    <>
    <div name="about" className="w-full mt-16 h-screen bg-[#2C3361] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
          <div className="sm:text-left text-5xl font-bold text-[#F2ECBE] py-8 mt-20">
            <h1 className="py-4">WAYANG</h1>
            <div className="sm:text-left text-white font-[300] text-lg">
              Wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional
            </div>
            <div className="relative">
              <div className="bg-[#AD88E7] text-white w-32 h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#212759] text-base">
                <span className="hover:text-[#FCF5ED]">Explore</span>
                <span>&#10132;</span>
              </div>
            </div>
          </div>

            <div className="hidden sm:flex">
              <Image src="/bgKesenian.png" width={600} height={600} alt={"..."} />
            </div>
          </div>
            <Pandawa />
            <Punakawan />
        </div>
      </div>
    </>
  );
};

export default Wayang;
