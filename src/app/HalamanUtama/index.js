import Image from "next/image";
import React from "react";

const HalamanUtama = () => {
  return (
    <>
      <div className="flex justify-between p-8 bg-[#c08261]">
        <div>
            <h1>SELAMAT DATANG DI TRADISIO</h1>
        </div>
        <div>
            <Image src="/wayang-kanan.png" width={550} height={550}/>
        </div>
      </div>
    </>
  );
};

export default HalamanUtama;
