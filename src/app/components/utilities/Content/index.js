import React from "react";

const ContentHomePage = () => {
  return (
    <>
      {/* Menu Portofolio */}
      <div className="bg-[#9A3B3B] text-white py-4">
        <div className="max-w-screen-xl mx-auto my-8">
          <p className="max-w-screen-xl text-lg font-light mx-auto text-center  text-white py-8">
            Selamat datang di dunia budaya yang memikat! Bersama kami, Anda akan
            menemukan keajaiban bahasa dan warisan budaya. Mari kita menjelajahi
            cerita lama yang begitu memikat dan merasakan pesona yang luar biasa
            dari jenis-jenis wayang yang berbeda. Bergabunglah dengan kami di
            perjalanan yang tak terlupakan!
          </p>
          <ul className="flex sm:flex-row flex-col gap-16 justify-center mx-8">
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Bahasa</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Warisan</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Pojok Cerita</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
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
