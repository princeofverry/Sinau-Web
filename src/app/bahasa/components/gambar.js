import React from "react";
import Image from "next/image";

const GambaranBahasa = ({ source, judul }) => {
  return (
    <>
      <div className="font-bold text-center">{judul}</div>
      <Image
        src={source}
        width={459}
        height={611}
        className="mx-auto"
        alt="..."
      />
    </>
  );
};

export default GambaranBahasa;
