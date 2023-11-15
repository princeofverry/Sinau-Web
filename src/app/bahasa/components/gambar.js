import React from "react";
import Image from "next/image";

const GambaranBahasa = ({ source, judul, backgroundColor }) => {
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: backgroundColor || '#fff', // Default to white if no backgroundColor prop is provided
    padding: '16px', // Adjust padding as needed
  };

  return (
    <div style={containerStyle}>
      <div className="font-bold">{judul}</div>
      <Image
        src={source}
        width={459}
        height={611}
        className="mx-auto"
        alt="..."
      />
    </div>
  );
};

export default GambaranBahasa;
