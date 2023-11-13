import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div name="about" className="w-full mt-16 h-screen bg-[#c08261] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max ">
            <div className="sm:text-left font-bold text-white py-8" style={{ marginTop: '85px' }}>
              <h1 className="py-4 text-2xl text-[#F2ECBE]">
                <span className="typing-animation">SELAMAT DATANG DI TRADISIO</span>
              </h1>
              <div className="sm:text-left text-4xl font-[400] text-white"style={{ fontFamily: 'Roboto, sans-serif' }}>
                Telusuri Keindahan Budaya Jawa yang Memukau dan Penuh Pesona dalam Perjalanan Tak Terlupakan!
              </div>
              <div className="text-base font-light py-8 text-[#F2EEBF]">
                Tradisio akan membawa Anda lebih dekat dengan kekayaan budaya Jawa
              </div>
            </div>
            <div className="hidden sm:flex">
              <Image src="/wayang-kanan.png" width={400} height={400} alt={"..."} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
