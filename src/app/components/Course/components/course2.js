import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import icons from wherever they are defined

const Course2 = () => {
  return (
    <div className="bg-[#2C3361] h-full text-white p-8">
      <h1 className="text-4xl font-bold text-white text-center pt-4">
        Unggah-Ungguh Basa Jawa
      </h1>
      <p className="sm:px-32 px-4 text-justify py-4">
        Sinau, platform kursus Bahasa Jawa. Kami membawa Anda pada perjalanan
        edukasi yang menyenangkan dan bermakna. 
      </p>
      <div className="max-w-screen-xl mx-auto">
        <div className="pandawa-container flex justify-center">
          <div className="flex flex-wrap justify-center gap-14">
              <div className="pandawa-box bg-[#AD88E7] w-full sm:w-[600px] h-[400px] rounded-2xl relative overflow-hidden">
                {/* Image inside the top box */}
                <Image
                  src="/unggah.png"
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
                    <img src="/iconCC.png" alt="CC" className="h-8" />
                    <img src="/iconSetting.png" alt="Setting" className="h-8" />
                    <img src="/iconFull.png" alt="Full" className="h-8" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2;
