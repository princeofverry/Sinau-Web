import Image from "next/image";
import React from "react";

const ContentHomePage = () => {
  return (
    <>
      <div className="bg-[#9A3B3B] text-white py-6">
        <div className="bg-[#E2C799] w-fit p-4 rounded-lg mx-auto">
          <h1 className="text-4xl font-bold text-[#9A3B3B] text-center">JAWA</h1>
          <p className="text-md text-[#C08261] mt-4">
            pulau terluas ke-13 di dunia. Dengan sekitar 150 juta penduduk,
            rumah bagi 60% penduduk Indonesia. Ibu Kota Indonesia, Jakarta, juga
            berada disini, di ujung barat laut Pulau Jawa.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto my-8">
          <p className="max-w-screen-xl text-md font-light mx-auto text-center  text-white py-8">
            Pulau jawa adalah pusat segala hal. Kebijaksanaan kuno, budaya
            megah, dan seni tradisional bergabung dalam harmoni yang memukau.
            Mari kita eksplorasi pandangan penuh warna akan Jawa yang
            menggagumkan.
          </p>
          <ul className="flex sm:flex-row flex-col gap-16 justify-center mx-8">
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconBahasa.png"
                width={240}
                height={300}
                className="mx-auto my-4"
              ></Image>
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Bahasa</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconWarisan.png"
                width={200}
                height={230}
                className="mx-auto my-4"
              ></Image>
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Warisan</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconCerita.png"
                width={160}
                height={400}
                className="mx-auto"
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Pojok Cerita</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconWayang.png"
                width={240}
                height={400}
                className="mx-auto"
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Wayang</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContentHomePage;
