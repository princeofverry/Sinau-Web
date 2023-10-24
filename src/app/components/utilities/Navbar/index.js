import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="p-6 flex items-center justify-between bg-[#9A3B3B]">
      <div className="flex items-center space-x-1 group">
        <Image src="/Tradisio.png" alt="logo-tradisio" width={30} height={30} className="logo-tradisio group-hover:animate-goyang"/>
        <p className="text-2xl font-bold italic text-[#F2ECBE]">Tradisio</p>
      </div>
      <div className="flex items-center space-x-10">
        <Link href="/" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">Home</Link>
        <Link href="/bahasa" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">Bahasa</Link>
        <Link href="/warisan" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">Warisan</Link>
        <Link href="/cerita" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">Cerita</Link>
        <Link href="/wayang" className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">Wayang</Link>
      </div>
    </div>
  );
};

export default Navbar;
