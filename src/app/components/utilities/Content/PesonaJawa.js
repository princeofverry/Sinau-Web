import Image from "next/image";
import React from "react";
import Statistik from "./statistik";

const PesonaJawa = () => {
  return (
    <>
      <div className="bg-[#2C3361] text-white pt-8">
        <h2 className="text-3xl font-bold text-center">PESONA JAWA</h2>
        <p className="max-w-screen-xl sm:text-md text-lg sm:font-base font-extralight mx-auto text-center  text-white pb-8">
          Tradisional • Memikat • Eksotis
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 bg-[#2C3361] p-4 md:px-32">
        <div className="col-span-1 md:col-span-2">
          <div className="aspect-w-5 aspect-h-8 hidden md:block hover:blur-sm">
            <Image
              className="rounded-lg"
              src="/pesonaJawa1.png"
              width={500}
              height={700}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:col-start-3 row-start-1">
          <div className="aspect-w-1 aspect-h-2 hover:blur-sm">
            <Image
              src="/pesonaJawa2.png"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:row-start-2 row-start-2">
          <div className="aspect-w-1 aspect-h-2 hover:blur-sm">
            <Image
              src="/pesonaJawa3.png"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:row-start-2 row-start-3">
          <div className="aspect-w-1 aspect-h-2 hover:blur-sm">
            <Image
              src="/pesonaJawa4.png"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:row-start-2 row-start-4">
          <div className="aspect-w-1 aspect-h-2 hover:blur-sm">
            <Image
              src="/pesonaJawa5.png"
              width={200}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PesonaJawa;
