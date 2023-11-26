import React from 'react';
import Image from 'next/image';

const Pandawa = () => {
  return (
    <div className="bg-[#212759] text-white pb-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2C3361"
          fillOpacity="1"
          d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,101.3C480,107,549,149,617,170.7C685.7,192,754,192,823,176C891.4,160,960,128,1029,101.3C1097.1,75,1166,53,1234,53.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h1 className="text-4xl font-bold text-white text-center">Pandawa Lima</h1>
      <div className="max-w-screen-xl mx-auto my-4">
        <p className="max-w-screen-xl text-md font-light mx-auto text-center text-white pb-8">
          Pandawa Lima merupakan sebutan untuk lima bersaudara pada tokoh pewayangan yang terdapat dalam kisah Mahabharata. Sesuai namanya “Pandawa Lima” terdiri dari 5 tokoh yang merupakan anak dari Pandu, seorang Raja di Hastinapura.
        </p>
        <div className='pandawa-container flex flex-wrap gap-16 justify-center mx-8'>
          <div className='flex flex-row space-x-5 '>
            {/* Yudistira */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconYudistira.png"
                width={110}
                height={140}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Yudhistira</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Yudhistira</h4>
                <p className='additional-text w-40'>Penjelmaan Dewa Yama, dan memerintah di Kerajaan Amarta. Tokoh ini memiliki karakter yang sangat bijaksana</p>
              </div>
            </div>

            {/* Bima */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconBima.png"
                width={140}
                height={160}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Bima</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Bima</h4>
                <p className='additional-text w-40'>Penjelmaan dari Dewa Bayu, yang bertempat tinggal di wilayah Indraprastha, dan digambarkan sebagai sosok yang kuat</p>
              </div>
            </div>

            {/* Arjuna */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconArjuna1.png"
                width={110}
                height={140}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Arjuna</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Arjuna</h4>
                <p className='additional-text w-40'>Penjelmaan dari Dewa Indra, yang memimpin kerajaan di Madukara dan digambarkan sebagai sosok ksatria yang cerdik</p>
              </div>
            </div>

            {/* Nakula */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconNakulaSadewa.png"
                width={120}
                height={200}
                className="mx-auto my-4 hover:scale-105 pb-8 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Nakula</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Nakula</h4>
                <p className='additional-text w-40'>Penjelmaan dari Dewa Kembar Aswin dan digambarkan sebagai sosok yang pandai dalam memainkan senjata</p>
              </div>
            </div>

            {/* Sadewa */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconNakulaSadewa.png"
                width={120}
                height={200}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Sadewa</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Sadewa</h4>
                <p className='additional-text w-40'>Penjelmaan dari Dewa Kembar Aswin dan digambarkan sebagai sosok yang ahli dalam ilmu astronomi</p>
              </div>
            </div>
            
            {/* ... (tambahkan elemen pandawa-box lebih banyak jika diperlukan) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pandawa;
