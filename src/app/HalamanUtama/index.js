import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div name="about" className="h-screen bg-[#2C3361] text-gray-300 pt-32 sm:pt-0">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max mt-16">
            <div className="sm:text-left mt-8 font-bold sm:py-8 text-white py-4 order-1 sm:order-1">
              <h1 className="sm:py-4 py-2 sm:mt-16 text-3xl sm:text-2xl sm:text-left text-center text-[#F2ECBE]">
                <span className="typing-animation">SELAMAT DATANG DI TRADISIO</span>
              </h1>
              <div className="sm:text-left text-center text-xl sm:text-2xl md:text-4xl font-[400] text-white">
                Telusuri Keindahan Budaya Jawa yang Memukau dan Penuh Pesona dalam Perjalanan Tak Terlupakan!
              </div>
              <div className="sm:text-md text-base font-light sm:text-left text-center sm:py-4 py-2 text-[#F2EEBF]">
                Tradisio akan membawa Anda lebih dekat dengan kekayaan budaya Jawa
              </div>
            </div>
            <div className="order-2 sm:order-2">
              <Image src="/wayangBG.png" width={600} height={600} alt={"..."} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
