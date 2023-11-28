import React from "react";
import CountUp from "../../../bahasa/components/countUp";

const Statistik = () => {
  return (
    <>
      <div className="bg-[#2C3361]">
      </div>
      <div className="w-full h-fit p-8 bg-[#4938A0] text-white">
        <div className="flex sm:flex-row sm:justify-around gap-4 flex-col text-xl font-[500]">
          <div className="text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <div className="">
              <h1 className="">Luas</h1>
              <CountUp start={0} end={128297} keterangan={"km²"} />
            </div>
          </div>
          <div className="text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <div className=" ">
              <div className="">
                <h1>Provinsi</h1>
                <CountUp start={0} end={6} keterangan={""} />
              </div>
            </div>
          </div>
          <div className="text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <div className="">
              <div className="">
                <h1>Penduduk</h1>
                <CountUp start={0} end={151.6} keterangan={"Juta Jiwa"} />
              </div>
            </div>
          </div>
          <div className="text-center">
            {" "}
            {/* Tambahkan kelas text-center di sini */}
            <div className=" ">
              <div className="">
                <h1>Kepadatan</h1>
                <CountUp start={0} end={1121} keterangan={"jiwa/km²"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#212759]">
      </div>
    </>
  );
};

export default Statistik;
