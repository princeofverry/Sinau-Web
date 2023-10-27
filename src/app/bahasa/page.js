import React from 'react'
import Image from "next/image";

const Bahasa = () => {
    return (
      <>
         <div
      name="about"
      className="w-full mt-16 h-screen bg-[#c08261] text-gray-300 flex justify-center items-center"
    >
      <div className="max-w-[1000px] w-full text-center px-4">
      <h1 className="text-5xl font-bold text-white">"Bahasa Jawa"</h1>
        <h2 className="text-5xl font-bold text-white py-4">Kekayaan Warisan Budaya Indonesia</h2>
        <p className="text-base font-extralight text-white">
        Selamat datang di sumber daya pembelajaran bahasa Jawa. Temukan keindahan dan sejarah bahasa Jawa yang kaya, serta pelajari cara berkomunikasi dalam bahasa ini.
        </p>
      </div>
    </div>
    <div className="bg-[#9A3B3B] text-white py-6">
        <div className="max-w-screen-xl mx-auto my-8">
        <h1 className="text-3xl font-bold text-white text-center">"Aksara Jawa"</h1>
          <p className="max-w-screen-xl text-lg font-light mx-auto text-center  text-white py-8">
          Warisan budaya Nusantara yang indah dan berharga.
          </p>
          <ul className="flex sm:flex-row flex-col gap-16 justify-center mx-8">
            <li>
              <div style={{ fontWeight: 'bold', textAlign: 'center' }}>AKSARA JAWA</div>
              <img src="/aksaraJawa.png" width={459} height={611} className="mx-auto" alt="Aksara Jawa" />
            </li>
            <li>
              <div style={{ fontWeight: 'bold', textAlign: 'center' }}>SANDHANGAN</div>
              <img src="/aksaraSandang.png" width={459} height={611} className="mx-auto" alt="Aksara Sandang" />
            </li>
          </ul>
        </div>
      </div>
      </>
    );
  };
  
  export default Bahasa
  