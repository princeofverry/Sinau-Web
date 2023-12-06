import React from "react";
import Image from "next/image";
import Link from "next/link";

const Course1 = () => {
  return (
    <div className="bg-[#212759] h-full text-white p-8">
      <h1 className="text-4xl font-bold text-white text-center pt-4">
        Sinau Jawa
      </h1>
      <p className="sm:px-32 px-4 text-justify py-4">
        Sinau, platform kursus Bahasa Jawa. Kami membawa Anda pada perjalanan
        edukasi yang menyenangkan dan bermakna. Kami mengundang Anda untuk
        mengeksplorasi keindahan dan kompleksitas Bahasa Jawa melalui kursus
        interaktif dan terstruktur kami. Dengan Sinau, Anda akan memperoleh
        pemahaman mendalam tentang tata bahasa, kosakata, dan aspek kultural
        yang kaya dari Bahasa Jawa. Kami siap menjadi mitra belajar Anda dalam
        perjalanan ini, memberikan pengalaman belajar yang mendalam dan terarah,
        serta memperkaya keterampilan berbahasa Jawa Anda. Segera bergabung
        dengan Sinau dan temukan keajaiban bahasa dan budaya Jawa bersama kami.
      </p>
      <div className="max-w-screen-xl mx-auto">
        <div className="pandawa-container flex justify-center">
          <div className="flex flex-wrap justify-center gap-14">
            {/* Unggah-ungguh basa jawa */}
            <Link href="/Course/components/course2">
              <div className="pandawa-box bg-[#AD88E7] w-full sm:w-60 h-72 rounded-2xl relative overflow-hidden">
                <Image
                  src="/iconUnggah.png"
                  width={220}
                  height={240}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  {/* Isi kotak dalam */}
                  <p className="text-white text-center font-bold">
                    Unggah-ungguh basa jawa
                  </p>
                </div>
              </div>
            </Link>

            {/* Aksara Jawa */}
            <Link href="/Course/components/course2">
              <div className="pandawa-box bg-[#AD88E7] w-full sm:w-60 h-72 rounded-2xl relative overflow-hidden">
                <Image
                  src="/iconGareng.png"
                  width={200}
                  height={260}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  {/* Isi kotak dalam */}
                  <p className="text-white text-center font-bold">
                    Aksara Jawa
                  </p>
                </div>
              </div>
            </Link>

            {/* Pacelathon Basa Jawa*/}
            <Link href="/Course/components/course2">
              <div className="pandawa-box bg-[#AD88E7] w-full sm:w-60 h-72 rounded-2xl relative overflow-hidden">
                <Image
                  src="/iconPetruk.png"
                  width={200}
                  height={240}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  {/* Isi kotak dalam */}
                  <p className="text-white text-center font-bold">
                    Pacelathon Basa Jawa
                  </p>
                </div>
              </div>
            </Link>

            {/* Bagong */}
            <Link href="/Course/components/course2">
              <div className="pandawa-box bg-[#AD88E7] w-full sm:w-60 h-72 rounded-2xl relative overflow-hidden">
                <Image
                  src="/iconBagong.png"
                  width={220}
                  height={240}
                  className="mx-auto my-4 hover:scale-105 transition-all duration-300"
                  alt={"..."}
                />
                <div className="bg-[#4938A0] w-full h-16 rounded-2xl absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  {/* Isi kotak dalam */}
                  <p className="text-white text-center font-bold">
                    Pranatacara
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1;
