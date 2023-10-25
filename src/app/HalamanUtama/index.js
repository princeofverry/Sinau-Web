import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div
        name="about"
        className="w-full mt-16 h-screen bg-[#c08261] text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>
          {/* nambahin fitur */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max ">
            <div
              className="sm:text-left text-5xl font-bold text-white py-8"
              style={{ marginTop: "85px" }}
            >
              <h1 className="py-4">HELLO TRADISIONERS!</h1>
              <div className="sm:text-left text-3xl font-[500] text-[#E2C799]">
                Temukan keberagaman budaya
              </div>
              <div className="text-base font-extralight text-white">
                "Melalui <a className="font-bold">Tradisio</a>, kita diajak
                dalam perjalanan yang memikat untuk memahami{" "}
                <a className="font-bold">aksara Jawa</a>, merasakan pesona{" "}
                <a className="font-bold">warisan budaya</a>, merenung dalam{" "}
                <a className="font-bold">kisah</a> lama, dan mengeksplorasi
                pesona jenis-jenis <a className="font-bold">wayang.</a>"
              </div>
            </div>
            <div className="hidden sm:flex">
              <Image src="/wayang-kanan.png" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
