import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div
        name="about"
        className="h-screen bg-[#2C3361] text-gray-300 pt-32 sm:pt-0"
      >
        <div className="flex flex-col pt-16 items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
            <div className="sm:text-left font-bold sm:py-8 text-white py-4 order-1 sm:order-1">
              <h1 className="sm:py-4 py-2 sm:mt-16 text-3xl sm:text-2xl sm:text-left text-center text-[#F2ECBE]">
                <span className="typing-animation">
                  SELAMAT DATANG DI SINAU
                </span>
              </h1>
              <div className="sm:text-left text-center text-xl sm:text-2xl md:text-4xl font-[400] text-white">
                Pelajari Bahasa Jawa dengan Mudah melalui Platform Online yang
                Interaktif dan Terstruktur.
              </div>
              <div className="sm:text-md text-base font-light sm:text-left text-center sm:py-4 py-2 text-[#F2EEBF]">
                Sinau akan membawa Anda lebih dekat dengan kekayaan bahasa Jawa
              </div>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-[#5260e2] p-2 rounded-md hover:bg-[#48306e] hover:scale-105 transition duration-300 text-base ">
                  Yuk Belajar!!!
                </button>
              </div>
            </div>
            <div className="order-2 sm:order-2 sm:block hidden">
              <Image src="/masJawa.png" width={600} height={600} alt={"..."}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
