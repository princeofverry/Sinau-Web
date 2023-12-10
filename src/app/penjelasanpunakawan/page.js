import React from "react";
import Image from "next/image";
import Link from "next/link";

const Penjelasanpunakawan= () => {
  return (
    <div className="bg-[#2C3361] flex flex-col min-h-screen text-white sm:px-80 px-8 items-center justify-center py-4">
      <h1 className="sm:text-3xl text-lg font-bold text-white text-center py-4">
        YSemar
      </h1>
      <div className="max-w-screen-xl mx-auto mb-8">
        <div className="pandawa-container flex justify-center">
          <div className="flex flex-wrap justify-center gap-14">
            <div className="pandawa-box bg-[#AD88E7] sm:w-[600px] w-[300px] h-[200px] sm:h-[400px] rounded-2xl relative overflow-hidden">
              {/* Image inside the top box */}
              <Image
                src="/videoSemar.png"
                layout="fill"
                objectFit="cover"
                alt="Unggah-Ungguh"
              />
              <div className="bg-[#4938A0] w-full h-20 rounded-b-2xl absolute bottom-0 left-0 right-0 flex justify-between items-center px-4">
                {/* IconPlay on the left */}
                <div className="flex items-center">
                  <Image
                    src="/iconPlay.png"
                    width={20}
                    height={20}
                    alt="play"
                  />
                </div>
                {/* Additional icons on the right */}
                <div className="flex items-center space-x-4">
                  <Image src="/iconCC.png" alt="CC" width={32} height={32} />
                  <Image
                    src="/iconSetting.png"
                    alt="Setting"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/iconFull.png"
                    alt="Full"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Quiz button */}
      <Link href="/Quizpunakawan">
        <button className="bg-[#4938A0] text-white px-4 py-2 rounded-md w-full sm:w-[600px] hover:bg-[#5E4C96] transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Penjelasanpunakawan;
