import React from 'react';
import Image from 'next/image';

const Punakawan = () => {
  return (
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
          Punakawan adalah tokoh pewayangan Jawa yang diciptakan oleh seorang pujangga Jawa, dan merupakan mitologi asli masyarakat Jawa. Tokoh punakawan pertama kali muncul dalam karya Sastra Ghatotkacasraya, karangan Empu Panuluh pada zaman Kerajaan Kediri
        </p>
        <div className='pandawa-container flex flex-col sm:flex-row sm:justify-center items-center gap-14 mx-8'>
          <div className='flex flex-row space-x-12 '>
            {/* Semar */}
            <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
              <Image
                src="/iconSemar1.png"
                width={220}
                height={240}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Semar</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Semar</h4>
                <p className='additional-text w-40'>melambangkan kehendak yang luhur, sehingga tidak pernah mau mengabdi kepada manusia yang berbuat jahat</p>
              </div>
            </div>

            {/* Gareng */}
            <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
              <Image
                src="/iconGareng.png"
                width={200}
                height={260}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Gareng</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Gareng</h4>
                <p className='additional-text w-40'>memiliki sifat penuh toleransi, suka menolong, dan sifat sepi ing pamrih rame ing gawe atau rajin bekerja dan jauh dari watak aji mumpung</p>
              </div>
            </div>

            {/* Petruk */}
            <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
              <Image
                src="/iconPetruk.png"
                width={200}
                height={240}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Petruk</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Petruk</h4>
                <p className='additional-text w-40'>Penggambaran fisik yang serba berlebih pada tokoh Petruk ini memiliki makna bahwa tokoh ini suka menolong, serta selalu memberi kasih sayang terhadap sesama</p>
              </div>
            </div>

            {/* Bagong */}
            <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
              <Image
                src="/iconBagong.png"
                width={220}
                height={240}
                className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                alt={"..."}
              />
              <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                {/* Isi kotak dalam */}
                <p className="text-white text-center font-bold">Bagong</p>
              </div>
              <div className="pandawa-layer bg-[#C08261] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                <h4 className="text-white text-center">Bagong</h4>
                <p className='additional-text w-40'>Penggambaran fisik Bagong ini memiliki makna bahwa kebijaksanaannya melebihi orang tuanya yang lebih dewasa, dan kebijaksanaan ini ditunjukkan dengan cara memakai pakaian orang dewasa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Punakawan;
