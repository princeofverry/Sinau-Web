import Image from "next/image";
import React from "react";
import PesonaJawa from "./PesonaJawa";

const ContentHomePage = () => {
  return (
    <>
      <div className="bg-[#212759] h-full text-white py-20">
        <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center pb-4">Pulau Jawa </h1>
          <p className="max-w-screen-xl sm:text-md text-lg sm:font-base font-light mx-auto text-center text-white pb-8">
            Pulau jawa adalah pusat segala hal. Kebijaksanaan kuno, budaya
            megah, dan seni tradisional bergabung dalam harmoni yang memukau.
            Mari kita eksplorasi pandangan penuh warna akan Jawa yang
            menggagumkan.
          </p>
          <ul className="flex flex-col sm:flex-row sm:justify-center items-center gap-12 mx-8">
            <li className="bg-[#AD88E7] w-80 h-72 rounded-2xl relative overflow-hidden">
              {/* Kotak dalam */}
              <Image
                src="/iconBahasa.png"
                width={260}
                height={320}
                className="object-cover mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Bahasa</p>
              </div>
            </li>
            <li className="bg-[#AD88E7] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconWarisan.png"
                width={200}
                height={230}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Warisan</p>
              </div>
            </li>
            <li className="bg-[#AD88E7] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconCerita.png"
                width={160}
                height={400}
                className="mx-auto hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Pojok Cerita</p>
              </div>
            </li>
            <li className="bg-[#AD88E7] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconWayang.png"
                width={240}
                height={400}
                className="mx-auto hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Wayang</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Konten Baru */}
      <PesonaJawa/>
    </>
  );
};

export default ContentHomePage;
