import React from 'react';
import Image from 'next/image';

const Wayang = () => {
  return (
    <>
      <div name="about" className="w-full mt-16 h-screen bg-[#c08261] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>
          {/* Menambahkan fitur */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
            <div className="sm:text-left text-5xl font-bold text-[#F2ECBE] py-8" style={{ marginTop: "85px" }}>
              <h1 className="py-4">WAYANG</h1>
              <div className="sm:text-left text-3xl text-white font-[300]" style={{ fontSize: '24px' }}>
                Wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional
              </div>

              {/* Menambahkan kotak Explore */}
              <div className="relative">
                <div className="bg-[#9A3B3B] text-white w-32 h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#E2C799]"style={{ fontSize: '24px' }}>
                  <span className="hover:text-[#FCF5ED]">Explore</span>
                  <span className="ml-1">&#10132;</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex">
              <Image src="/wayang-kanan.png" width={400} height={400} alt={"..."}/>
            </div>
          </div>
        </div>
      </div>

      {/* Konten Pandawa*/}
      <div className="bg-[#9A3B3B] text-white pb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C08261"
            fillOpacity="1"
            d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,101.3C480,107,549,149,617,170.7C685.7,192,754,192,823,176C891.4,160,960,128,1029,101.3C1097.1,75,1166,53,1234,53.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <h1 className="text-4xl font-bold text-white text-center">P</h1>
        <div className="max-w-screen-xl mx-auto my-4">
          <p className="max-w-screen-xl text-md font-light mx-auto text-center  text-white pb-8">
            Pulau jawa adalah pusat segala hal. Kebijaksanaan kuno, budaya
            megah, dan seni tradisional bergabung dalam harmoni yang memukau.
            Mari kita eksplorasi pandangan penuh warna akan Jawa yang
            menggagumkan.
          </p>
          <ul className="flex sm:flex-row flex-col gap-16 justify-center mx-8">
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconBahasa.png"
                width={240}
                height={300}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Bahasa</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconWarisan.png"
                width={200}
                height={230}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Warisan</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconCerita.png"
                width={160}
                height={400}
                className="mx-auto hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Pojok Cerita</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconWayang.png"
                width={240}
                height={400}
                className="mx-auto hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Wayang</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconWayang.png"
                width={240}
                height={400}
                className="mx-auto hover:scale-105 transition-all duration-300"
                alt={"..."}
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Wayang</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


      {/* Konten Punakawan*/}
      <div className="bg-[#c08261] text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9A3B3B"
            fillOpacity="1"
            d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,101.3C480,107,549,149,617,170.7C685.7,192,754,192,823,176C891.4,160,960,128,1029,101.3C1097.1,75,1166,53,1234,53.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        
          <h1 className="text-4xl font-bold text-white text-center">Punakawan</h1>

        <div className="max-w-screen-xl mx-auto">
          <p className="max-w-screen-xl text-md font-light mx-auto text-center  text-white py-8">
            Pulau jawa adalah pusat segala hal. Kebijaksanaan kuno, budaya
            megah, dan seni tradisional bergabung dalam harmoni yang memukau.
            Mari kita eksplorasi pandangan penuh warna akan Jawa yang
            menggagumkan.
          </p>
          <ul className="flex sm:flex-row flex-col gap-16 justify-center mx-8">
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconBahasa.png"
                width={240}
                height={300}
                alt={"..."}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
              ></Image>
              <div className="bg-[#F2ECBE] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Bahasa</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              {/* Kotak dalam */}
              <Image
                src="/iconWarisan.png"
                width={200}
                height={230}
                alt={"..."}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
              ></Image>
              <div className="bg-[#F2ECBE] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Warisan</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconCerita.png"
                width={160}
                height={400}
                alt={"..."}
                className="mx-auto hover:scale-105 transition-all duration-300"
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#F2ECBE] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Pojok Cerita</p>
              </div>
            </li>
            <li className="bg-[#E2C799] w-80 h-72 rounded-2xl relative">
              <Image
                src="/iconWayang.png"
                width={240}
                height={400}
                alt={"..."}
                className="mx-auto hover:scale-105 transition-all duration-300"
              ></Image>
              {/* Kotak dalam */}
              <div className="bg-[#F2ECBE] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center">Wayang</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Wayang;