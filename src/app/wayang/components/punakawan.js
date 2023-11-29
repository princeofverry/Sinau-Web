import React from 'react';
import Image from 'next/image';

const Punakawan = () => {
  return (
    <div className="bg-[#2C3361] min-h-screen text-white pb-24">
      <h1 className="text-4xl font-bold text-white text-center pt-24">Punakawan</h1>
      <div className="max-w-screen-xl mx-auto my-4">
        <p className="max-w-screen-xl text-md font-light mx-auto text-center text-white pb-8" style={{ width: '1100px' }}>
          Punakawan adalah tokoh pewayangan Jawa yang diciptakan oleh seorang pujangga Jawa, dan merupakan mitologi asli masyarakat Jawa. Tokoh punakawan pertama kali muncul dalam karya Sastra Ghatotkacasraya, karangan Empu Panuluh pada zaman Kerajaan Kediri.
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
                <p className='additional-text w-40'>Melambangkan kehendak yang luhur, sehingga tidak pernah mau mengabdi kepada manusia yang berbuat jahat.</p>
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
                <p className='additional-text w-40'>Memiliki sifat penuh toleransi, suka menolong, dan sifat sepi ing pamrih rame ing gawe atau rajin bekerja dan jauh dari watak aji mumpung.</p>
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
                <p className='additional-text w-40'>Penggambaran fisik yang serba berlebih memiliki makna bahwa ia suka menolong, serta selalu memberi kasih sayang terhadap sesama.</p>
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
                <p className='additional-text w-40'>Kebijaksanaannya melebihi orang tuanya yang lebih dewasa, ini ditunjukkan dengan cara memakai pakaian orang dewasa.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Punakawan;
