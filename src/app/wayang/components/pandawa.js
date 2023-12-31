import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Pandawa = () => {
  return (
    <div className="bg-[#212759] h-max w-full text-white pb-8">
      <h1 className="sm:text-3xl text-xl font-bold text-white text-center pt-8">Pandawa Lima</h1>
      <div className="max-w-screen-xl mx-auto my-4">
        <p className="sm:text-md text-base font-light mx-auto text-center text-white pb-8 sm:px-16">
          Pandawa Lima merupakan sebutan untuk lima bersaudara pada tokoh pewayangan yang terdapat dalam kisah Mahabharata. Sesuai namanya “Pandawa Lima” terdiri dari 5 tokoh yang merupakan anak dari Pandu, seorang Raja di Hastinapura.
        </p>
        <div className='pandawa-container items-center justify-center mx-8'>
          <div className='flex flex-wrap gap-4 justify-center items-center'>
            {/* Yudistira */}
            <Link href="./penjelasanwayang">
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
                  <p className='additional-text w-40'>Merupakan penjelmaan Dewa Yama. Ia memerintah di Kerajaan Amarta. Tokoh ini memiliki karakter yang sangat bijaksana.</p>
                </div>
              </div>
              </Link>

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
                <p className='additional-text w-40'>Merupakan penjelmaan Dewa Bayu. Ia bertempat tinggal di wilayah Indraprastha, dan digambarkan sebagai sosok yang kuat.</p>
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
                <p className='additional-text w-40'>Merupakan penjelmaan Dewa Indra. Ia memimpin kerajaan di Madukara dan digambarkan sebagai sosok ksatria yang cerdik.</p>
              </div>
            </div>

            {/* Nakula */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconNakulaSadewa.png"
                width={130}
                height={140}
                className="mx-auto my-4 hover:scale-105 pb-8 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Nakula</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Nakula</h4>
                <p className='additional-text w-40'>Merupakan penjelmaan Dewa Kembar Aswin dan digambarkan sebagai sosok yang pandai dalam memainkan senjata.</p>
              </div>
            </div>

            {/* Sadewa */}
            <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
              <Image
                src="/iconNakulaSadewa.png"
                width={130}
                height={140}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Sadewa</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Sadewa</h4>
                <p className='additional-text w-40'>Merupakan penjelmaan Dewa Kembar Aswin dan digambarkan sebagai sosok yang ahli dalam ilmu astronomi.</p>
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
