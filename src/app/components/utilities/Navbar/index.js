import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-6 flex items-center justify-between bg-[#9A3B3B]">
      <div className="flex items-center space-x-1 group">
        <Image src="/Tradisio.png" width={25} height={25} className="group-hover:animate-goyang"/>
        <p className="text-xl font-bold italic text-[#F2ECBE]">Tradisio</p>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-400">Home</Link>
        <Link href="/bahasa" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-400">Bahasa</Link>
        <Link href="/warisan" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-400">Warisan</Link>
        <Link href="/cerita" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-400">Cerita</Link>
        <Link href="/wayang" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-400">Wayang</Link>
      </div>
    </div>
  );
};

export default Navbar;
