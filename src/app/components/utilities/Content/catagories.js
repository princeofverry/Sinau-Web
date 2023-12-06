import Image from "next/image";
import React from "react";
import SliderTestimoni from "../../Course/components/TestimonialSlider";
import Statistik from "./statistik";

const Catagories = () => {
  return (
    <>
      <div className="bg-[#212759]">
        <h1 className="text-center text-4xl text-slate-50 pt-8 pb-4">
          Kenapa #HarusSinauTerus ?
        </h1>
        <div className="flex gap-8 justify-center md:flex-row flex-col items-center p-4">
          <div className="flex w-64">
            <div className="mr-4 flex-cols">
              <Image src="/books.svg" alt="..." width={250} height={250} />
            </div>
            <div className="text-slate-200">
              <h1 className="text-2xl">Course yang seru banget!!</h1>
              <p className="font-base text-slate-300">
                Nikmati pengalaman <strong>belajar</strong> yang menyenangkan
                dengan kelas <strong>Bahasa Jawa</strong> kami. Jelajahi
                kekayaan Bahasa Jawa melalui kursus yang kami tawarkan.
              </p>
            </div>
          </div>
          <div className="flex w-64">
            <div className="mr-4">
              <Image src="/quiz.svg" alt="..." width={300} height={250} />
            </div>
            <div className="text-slate-200">
              <h1 className="text-2xl">Melatih diri dengan Quiz</h1>
              <p className="font-base text-slate-300">
                Yuk sambut tantangan dengan <strong>quiz</strong> Bahasa Jawa!
                Test seberapa paham Anda terhadap <strong>bahasa Jawa.</strong>{" "}
                Jangan lewatkan keseruannya, ayo coba sekarang!
              </p>
            </div>
          </div>
          <div className="flex w-64">
            <div className="mr-4">
              <Image src="/wordle.svg" alt="..." width={300} height={250} />
            </div>
            <div className="text-slate-200">
              <h1 className="text-2xl">Game yang menarik</h1>
              <p className="font-base text-slate-300">
                Tebak kata dalam <strong>Wordle</strong>{" "}
                <strong>Bahasa Jawa!</strong> Coba sekarang dan ungkap rahasia
                kata dengan indahnya <strong>bahasa Jawa.</strong> Seru dan
                menantang!
              </p>
            </div>
          </div>
          <div className="flex w-64">
            <div className="mr-4">
              <Image src="/wordle.svg" alt="..." width={300} height={250} />
            </div>
            <div className="text-slate-200">
              <h1 className="text-2xl">Visualisasi wayang</h1>
              <p className="font-base text-slate-300">
                Terpesona dengan keajaiban dunia <strong>wayang? </strong>
                Temukan keindahan seni dan kisah di balik setiap tokoh wayang.
                Mari <strong>jelajahi</strong> dan nikmati keunikan budaya{" "}
                <strong>wayang</strong> bersama kami!
              </p>
            </div>
          </div>
        </div>
        <div className="text-slate-py-32 sm:pt-4 p-4">
          <Statistik />
        </div>
        <div className="bg-[#2C3361] p-4 sm:p-8 flex sm:flex-row flex-col">
          <div className="p-4 sm:ml-8">
            <h1 className="text-white text-2xl sm:text-4xl text-center sm:text-left">Testimoni Pengguna Kami!</h1>
            <p className="text-white mt-4 sm:mr-24 text-justify sm:text-base text-sm">
              Pemberi testimoni adalah penjelmaan kepuasan, menjadi saksi
              berharga atas pengalaman yang luar biasa. Dengan penuh antusias,
              mereka berbagi kesuksesan, memberikan cerita yang menginspirasi,
              dan menciptakan jejak positif dalam setiap pengalaman atau produk
              yang mereka alami.
            </p>
          </div>
          <SliderTestimoni />
        </div>
      </div>
    </>
  );
};

export default Catagories;
