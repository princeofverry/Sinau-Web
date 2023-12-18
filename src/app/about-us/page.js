import Image from "next/image";
import React from "react";
import BackToTop from "../components/utilities/Component/BackToTop";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#2C3361]">
      <div className="container mx-auto flex flex-col items-center">
        {/* konten 1 */}
        <div className="text-white w-full flex justify-start items-center gap-4 pt-16 lg:flex-row flex-col">
          <div className="sm:w-1/3 w-2/3 mt-4 shadow-xl">
            <Image
              src="/pesonaJawa2.png"
              className="w-auto h-auto"
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
          <div className="sm:w-2/3 w-full">
            <div className="sm:mx-auto flex flex-col justify-start">
              <p className="text-white sm:text-4xl text-2xl mt-6 font-bold sm:text-left text-center">
                ABOUT US.
              </p>
              <h1 className="md:text-base italic text-md sm:text-xl text-justify py-4 sm:px-0 px-8">
                Sinau adalah Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur nec hendrerit turpis, eu porta metus. Ut tempus
                interdum sagittis. Nunc viverra, dolor vel gravida congue, elit
                lacus pellentesque mi, id rhoncus sem velit vel enim. Nullam
                tincidunt, elit eu suscipit facilisis, orci mauris sodales
                tortor, nec venenatis turpis lacus eget ligula. Aenean varius
                est non ipsum facilisis, vel eleifend augue sodales. In hac
                habitasse platea dictumst. Sed vel enim sit amet justo auctor
                fringilla. In hac habitasse platea dictumst. Sed vel justo vel
                neque feugiat efficitur vel ac sem. Nulla facilisi. Curabitur
                congue, elit id venenatis tincidunt, quam velit mattis erat,
                vitae feugiat elit risus ut metus.
              </h1>
            </div>
          </div>
        </div>
        {/* konten 2 */}
        <div className="text-white w-full flex justify-center items-center pt-12 mx-auto">
          <div className="shadow-sm">
            <Image
              src="/pesonaJawa1.png"
              className="w-auto h-auto"
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
        </div>
        {/* konten 3 */}
        <div className="text-white w-full justify-start pt-8 flex items-center sm:justify-start sm:items-start sm:flex-row flex-col">
          <div className="w-1/2">
            <div class="mx-auto text-start flex flex-col justify-start">
              <p class="text-white sm:text-6xl text-4xl font-bold md:pt-32 md:pb-0 ml-0 sm:ml-12">
                "
              </p>
              <h1 class="sm:text-2xl text-xl  text-md font-bold text-justify px- md:px-24">
                Ampun dados tiyang ingkang rumaos saged. Ananging dados tiyang
                ingkang saged rumaos.
              </h1>
              <h2 class="text-white sm:text-6xl text-4xl font-bold md:pt-12 text-right mr-0 sm:mr-24">
                "
              </h2>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/pesonaJawa4.png"
              className="w-auto h-auto hidden sm:block shadow-lg"
              alt="..."
              layout="responsive" // Membuat gambar responsif
              width={250}
              height={450}
            />
          </div>
        </div>
        {/* konten 4*/}
        <div className="text-white w-full flex justify-start items-start pt-16 pl-1 pb-12">
          <div className="lg:block hidden">
            <div className="flex gap-4">
              <div className="sm:w-1/2">
                <Image
                  src="/profile1.jpeg"
                  className="w-72 h-72 pl-2 pb-8"
                  alt="..."
                  layout="fixed" // Membuat gambar responsif
                  width={250}
                  height={450}
                />
                <Image
                  src="/profile3.jpeg"
                  className="w-72 h-auto pl-6"
                  alt="..."
                  layout="fixed" // Membuat gambar responsif
                  width={250}
                  height={450}
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/profile2.jpeg"
                  className="w-80 h-auto pt-28 pr-4 pl-0"
                  alt="..."
                  layout="fixed" // Membuat gambar responsif
                  width={250}
                  height={450}
                />
              </div>
            </div>
          </div>
            <div className="max-w-[800px] mx-auto text-start flex flex-col justify-start">
              <p className="text-white sm:text-3xl text-2xl font-bold md:pb-0 text-center sm:text-left">
                THE TEAM.
              </p>
              <h1 className="italic text-md sm:text-lg md:py-6 text-justify px-8 sm:px-0 sm:pt-0 pt-4">
                Sinau.com adalah Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec hendrerit turpis, eu porta metus.
                Ut tempus interdum sagittis. Nunc viverra, dolor vel gravida
                congue, elit lacus pellentesque mi, id rhoncus sem velit vel
                enim. Nullam tincidunt, elit eu suscipit facilisis, orci mauris
                sodales tortor, nec venenatis turpis lacus eget ligula. Aenean
                varius est non ipsum facilisis, vel eleifend augue sodales. In
                hac habitasse platea dictumst. Sed vel enim sit amet justo
                auctor fringilla. In hac habitasse platea dictumst. Sed vel
                justo vel neque feugiat efficitur vel ac sem. Nulla facilisi.
                Curabitur congue, elit id venenatis tincidunt, quam velit mattis
                erat, vitae feugiat elit risus ut metus. Ampun dados tiyang
                ingkang rumaos saged. Ananging dados tiyang ingkang saged
                rumaos.
              </h1>
            </div>
          </div>
        </div>
      <BackToTop url={"/about-us"}/>
    </div>
  );
};

export default AboutUs;
