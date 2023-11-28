import React from "react";
import CountUp from "../../../bahasa/components/countUp";

const Statistik = () => {
  return (
    <>
      <div className="bg-[#2C3361]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4938A0"
            fill-opacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,106.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4938A0"
            fill-opacity="1"
            d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,133.3C672,107,768,85,864,106.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Statistik;
