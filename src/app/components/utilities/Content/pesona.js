import Image from "next/image";
import React from "react";

const Pesona = () => {
  return (
    <>
      <div className="bg-[#2C3361] text-white pb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212759"
            fillOpacity="1"
            d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,101.3C480,107,549,149,617,170.7C685.7,192,754,192,823,176C891.4,160,960,128,1029,101.3C1097.1,75,1166,53,1234,53.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="max-w-screen-xl mx-auto my-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center">PESONA JAWA</h2>
          <p className="max-w-screen-xl sm:text-md text-lg sm:font-base font-light mx-auto text-center  text-white pb-8">
            enchanting • exquisite • majestic
          </p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-[#AD88E7] w-full h-50 rounded-2xl relative ml-32">
              {/* Kotak dalam */}
              <Image
                src="/pesonaJawa1.png"
                width={600}
                height={300}
                className="object-cover rounded-t-2xl"
                alt={"..."}
              ></Image>
            </div>
            <div className="bg-[#AD88E7] w-80 h-50 rounded-2xl relative ml-32">
              {/* Kotak dalam */}
              <Image
                src="/pesonaJawa2.png"
                width={240}
                height={300}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-[#AD88E7] w-80 h-50 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/pesonaJawa3.png"
                width={240}
                height={300}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
            </div>
            <div className="bg-[#AD88E7] w-80 h-50 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/pesonaJawa4.png"
                width={240}
                height={300}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
            </div>
            <div className="bg-[#AD88E7] w-80 h-50 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/pesonaJawa5.png"
                width={240}
                height={300}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pesona;
