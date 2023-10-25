import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div name="about" className="w-full mt-16 h-screen bg-[#c08261] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>
          {/* nambahin fitur */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max ">
            <div className="sm:text-left text-5xl font-bold text-white py-8" style={{ marginTop: "85px" }}>
              <h1 className="py-4">HELLO TRADISIONERS!</h1>
              <div className="sm:text-left text-2xl font-[500] text-[#E2C799]">
                Temukan keberagaman budaya
              </div>
              <div className="text-base font-extralight text-white">
                "Melalui <a className="font-bold">Tradisio</a>, kita diajak dalam perjalanan yang memikat untuk memahami{" "}
                <a className="font-bold">aksara Jawa</a>, merasakan pesona{" "}
                <a className="font-bold">warisan budaya</a>, merenung dalam{" "}
                <a className="font-bold">kisah</a> lama, dan mengeksplorasi pesona jenis-jenis <a className="font-bold">wayang.</a>"
              </div>
            </div>
            <div className="hidden sm:flex">
              <Image src="/wayang-kanan.png" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Portofolio */}
      <div className="bg-[#9A3B3B] text-white py-4">
        <div className="max-w-[1000px] mx-auto">
          {/* Teks Lorem Ipsum 20 kata */}
          <p className="max-w-[1000px] mx-auto text-center text-white py-8">
            Selamat datang di dunia budaya yang memikat! Bersama kami, Anda akan menemukan keajaiban bahasa dan warisan budaya. Mari kita menjelajahi cerita lama yang begitu memikat dan merasakan pesona yang luar biasa dari jenis-jenis wayang yang berbeda. Bergabunglah dengan kami di perjalanan yang tak terlupakan!
          </p>
          <ul className="flex justify-center space-x-4">
            <li style={{ background: "#E2C799", width: "326px", height: "253px", borderRadius: "20px", position: "relative" }}>
              {/* Kotak dalam */}
              <div style={{ background: "#C08261", width: "238px", height: "60px", borderRadius: "18px", position: "absolute", bottom: 0, left: 0, right: 0,display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Isi kotak dalam */}
                <p style={{ color: "white", textAlign: "center" }}>Bahasa</p>
              </div>
            </li>
            <li style={{ background: "#E2C799", width: "326px", height: "253px", borderRadius: "20px", position: "relative" }}>
              {/* Kotak dalam */}
              <div style={{ background: "#C08261", width: "238px", height: "60px", borderRadius: "18px", position: "absolute", bottom: 0, left: 0, right: 0,display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Isi kotak dalam */}
                <p style={{ color: "white", textAlign: "center" }}>Warisan</p>
              </div>
            </li>
            <li style={{ background: "#E2C799", width: "326px", height: "253px", borderRadius: "20px", position: "relative" }}>
              {/* Kotak dalam */}
              <div style={{ background: "#C08261", width: "238px", height: "60px", borderRadius: "18px", position: "absolute", bottom: 0, left: 0, right: 0,display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Isi kotak dalam */}
                <p style={{ color: "white", textAlign: "center" }}>Pojok Cerita</p>
              </div>
            </li>
            <li style={{ background: "#E2C799", width: "326px", height: "253px", borderRadius: "20px", position: "relative" }}>
              {/* Kotak dalam */}
              <div style={{ background: "#C08261", width: "238px", height: "60px", borderRadius: "18px", position: "absolute", bottom: 0, left: 0, right: 0,display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Isi kotak dalam */}
                <p style={{ color: "white", textAlign: "center" }}>Wayang</p>
              </div>
            </li>
            {}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
