import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Course1 = () => {
  return (
    <div className="bg-[#2C3361] min-h-screen text-white pb-24">
      <h1 className="text-4xl font-bold text-white text-center pt-24">Sinau Jawa</h1>
      <div className="max-w-screen-xl mx-auto my-4">
        <div className='pandawa-container flex flex-col sm:flex-row sm:justify-center items-center gap-14 mx-8'>
          <div className='flex flex-row space-x-12 '>
            {/* Unggah-ungguh basa jawa */}
            <Link href="/Course/components/course2"> {/* Replace "/course2" with the actual path of your Course2 page */}
                <div className='pandawa-box bg-[#AD88E7] w-60 h-72 rounded-2xl relative'>
                  <Image
                    src="/iconUnggah.png"
                    width={220}
                    height={240}
                    className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                    alt={"..."}
                  />
                  <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                    {/* Isi kotak dalam */}
                    <p className="text-white text-center font-bold">Unggah-ungguh basa jawa</p>
                  </div>
                </div>
            </Link>

            {/* Aksara Jawa */}
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
                <p className="text-white text-center font-bold">Aksara Jawa</p>
              </div>
            </div>

            {/* Pacelathon Basa Jawa*/}
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
                <p className="text-white text-center font-bold">Pacelathon Basa Jawa</p>
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
                <p className="text-white text-center font-bold">Pranatacara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Course1;
