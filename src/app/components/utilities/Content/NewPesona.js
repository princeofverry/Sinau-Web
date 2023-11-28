import React from "react";

const NewPesona = () => {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-4 gap-4 p-8 bg-[#2C3361]">
        <div className="col-span-4 row-span-2 group bg-red-500">
          <img
            className="w-full h-min object-cover group-hover:blur-sm"
            src="/pesonaJawa1.png"
            alt="Deskripsi Gambar 1"
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-3 h-full  group bg-red-500">
          <img
            className="w-full h-min object-cover group-hover:blur-sm"
            src="/pesonaJawa2.png"
            alt="Deskripsi Gambar 3"
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-5 h-full row-start-1 bg-red-500">
          <img
            className="w-full h-min object-cover"
            src="/pesonaJawa3.png"
            alt="Deskripsi Gambar 4"
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 h-full row-start-3 bg-red-500">
          <img
            className="w-full h-min object-cover"
            src="/pesonaJawa4.png"
            alt="Deskripsi Gambar 5"
          />
        </div>
        <div className="col-span-2 row-span-2 col-start-5 h-full row-start-3 bg-red-500">
          <img
            className="w-full h-min object-cover"
            src="/pesonaJawa5.png"
            alt="Deskripsi Gambar 6"
          />
        </div>
      </div>
    </>
  );
};

export default NewPesona;
