import React from 'react';
import Image from 'next/image';

const Wayang = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2C3361] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 min-h-max">
          <div className="sm:text-left text-5xl font-bold text-[#F2ECBE] py-8 mt-20">
            <h1 className="py-4">WAYANG</h1>
            <div className="sm:text-left text-white font-[300] text-lg">
              Wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional
            </div>
            <div className="relative">
              <div className="bg-[#AD88E7] text-white w-32 h-12 mt-4 flex justify-center items-center rounded-md transition-all duration-300 hover:bg-[#212759] text-base">
                <span className="hover:text-[#FCF5ED]">Explore</span>
                <span>&#10132;</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex">
            <Image src="/wayangBG.png" width={600} height={600} alt={"..."} />
          </div>
        </div>
      </div>

      {/* Konten Pandawa*/}
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
          <div className='pandawa-container flex flex-wrap gap-16justify-center mx-8'>
            <div className='flex flex-row space-x-5 '>
              {/* Yudistira */}
              <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
                <Image
                  src="/iconYudistira.png"
                  width={120}
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
                  <p className='additional-text'>Digambarkan sebagai penjelmaan Dewa Yama, dan memerintah di Kerajaan Amarta. Tokoh ini memiliki karakter yang sangat bijaksana</p>
                </div>
              </div>

              {/* Bima */}
              <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
                <Image
                  src="/iconBima.png"
                  width={120}
                  height={140}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Bima</p>
              </div>
                <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <h4 className="text-white text-center">Bima</h4>
                  <p className='additional-text'>Digambarkan sebagai jelmaan dari Dewa Bayu, yang bertempat tinggal di Kadipaten Jodipati di wilayah Indraprastha. Tokoh ini digambarkan sebagai sosok yang kuat</p>
                </div>
              </div>

              {/* Arjuna */}
              <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
                <Image
                  src="/iconArjuna1.png"
                  width={120}
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
                  <p className='additional-text'>Penjelmaan dari Dewa Indra, yang memimpin kerajaan di Madukara. Dia digambarkan sebagai sosok ksatria yang cerdik dan gemar berkelana, bertapa, dan menuntut ilmu.</p>
                </div>
              </div>

              {/* Nakula */}
              <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
                <Image
                  src="/iconNakula.png"
                  width={120}
                  height={140}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Nakula</p>
              </div>
                <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <h4 className="text-white text-center">Nakula</h4>
                  <p className='additional-text'>Penjelmaan dari Dewa Kembar Aswin (dewa pengobatan). Nakula digambarkan sebagai sosok yang pandai dalam memainkan senjata. Dia merupakan seorang ksatria pedang yang tangguh</p>
                </div>
              </div>

              {/* Sadewa */}
              <div className='pandawa-box bg-[#AD88E7] w-56 h-72 rounded-2xl relative'>
                <Image
                  src="/iconNakula.png"
                  width={120}
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
                  <p className='additional-text'>merupakan penjelmaan dari Dewa Kembar Aswin. Sadewa digambarkan sebagai sosok yang ahli dalam ilmu astronomi. Dia memiliki karakter rajin, bijaksana, setia</p>
                </div>
              </div>


              {/* ... (add more pandawa-box elements as needed) */}
            </div>
          </div>
        </div>
      </div>
      {/* Punakawan */}
      <div className="bg-[#2C3361] text-white pb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212759"
            fillOpacity="1"
            d="M0,128L34.3,133.3C68.6,139,137,149,206,138.7C274.3,128,343,96,411,101.3C480,107,549,149,617,170.7C685.7,192,754,192,823,176C891.4,160,960,128,1029,101.3C1097.1,75,1166,53,1234,53.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <h1 className="text-4xl font-bold text-white text-center">Punakawan</h1>
        <div className="max-w-screen-xl mx-auto my-4">
          <p className="max-w-screen-xl text-md font-light mx-auto text-center text-white pb-8">
            Punakawan adalah tokoh pewayangan Jawa yang diciptakan oleh seorang pujangga Jawa, dan merupakan mitologi asli masyarakat Jawa. Tokoh punakawan pertama kali muncul dalam karya Sastra Ghatotkacasraya, karangan Empu Panuluh pada zaman Kerajaan Kediri.[1]
          </p>
          <div className='pandawa-container flex flex-col sm:flex-row sm:justify-center items-center gap-16 mx-8'>
            <div className='flex flex-row space-x-5 '>
              {/* Yudistira */}
              <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
                <Image
                  src="/iconYudistira.png"
                  width={120}
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
                  <p className='additional-text'>Digambarkan sebagai penjelmaan Dewa Yama, dan memerintah di Kerajaan Amarta. Tokoh ini memiliki karakter yang sangat bijaksana</p>
                </div>
              </div>

              {/* Bima */}
              <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
                <Image
                  src="/iconBima.png"
                  width={120}
                  height={140}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Bima</p>
              </div>
                <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <h4 className="text-white text-center">Bima</h4>
                  <p className='additional-text'>Digambarkan sebagai jelmaan dari Dewa Bayu, yang bertempat tinggal di Kadipaten Jodipati di wilayah Indraprastha. Tokoh ini digambarkan sebagai sosok yang kuat</p>
                </div>
              </div>

              {/* Arjuna */}
              <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
                <Image
                  src="/iconArjuna1.png"
                  width={120}
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
                  <p className='additional-text'>Penjelmaan dari Dewa Indra, yang memimpin kerajaan di Madukara. Dia digambarkan sebagai sosok ksatria yang cerdik dan gemar berkelana, bertapa, dan menuntut ilmu.</p>
                </div>
              </div>

              {/* Nakula */}
              <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
                <Image
                  src="/iconNakula.png"
                  width={120}
                  height={140}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Nakula</p>
              </div>
                <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <h4 className="text-white text-center">Nakula</h4>
                  <p className='additional-text'>Penjelmaan dari Dewa Kembar Aswin (dewa pengobatan). Nakula digambarkan sebagai sosok yang pandai dalam memainkan senjata. Dia merupakan seorang ksatria pedang yang tangguh</p>
                </div>
              </div>
              </div>
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wayang;
