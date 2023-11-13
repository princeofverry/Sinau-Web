import React from "react";
import CountUp from "../bahasa/components/countUp";

const Statistik = () => {
  return (
    <>
      <div className="w-full h-fit p-8 bg-[#E2C799]">
        <div className="flex justify-around text-xl text-[#9A3B3B] font-[500]">
          <div className="">
            <div className="">
              <h1 className="">Luas</h1>
                <CountUp start={0} end={128297} keterangan={"km²"} />
            </div>
          </div>
          <div className="flex flex-row text-[#9A3B3B] ">
            <div className="">
              <h1>Provinsi</h1>
                <CountUp start={0} end={6} keterangan={""} />
            </div>
          </div>
          <div className="flex flex-row text-[#9A3B3B] ">
            <div className="">
              <h1>Penduduk</h1>
                <CountUp start={0} end={151.6} keterangan={"Juta Jiwa"} />
            </div>
          </div>
          <div className="flex flex-row text-[#9A3B3B] ">
            <div className="">
              <h1>Kepadatan</h1>
                <CountUp start={0} end={1121} keterangan={"jiwa/km²"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistik;
