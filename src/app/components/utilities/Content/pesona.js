import Image from "next/image";
import React from "react";

const Pesona = () => {
  return (
    <>
      <div className="bg-[#2C3361] min-h-screen text-white pt-12">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
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
          <div className="grid grid-cols-3 gap-8 mb-24">
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
