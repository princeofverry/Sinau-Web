'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full bg-[#212759] shadow sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block">
          <div className="flex items-center space-x-1 group">
            <Image
              src="/Tradisio.png"
              alt="logo-tradisio"
              width={30}
              height={30}
              className="logo-tradisio group-hover:animate-goyang"
            />
            <p className="text-2xl font-bold italic text-[#F2ECBE]">Tradisio</p>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-white rounded-md outline-none focus:none focus:none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end md:flex md:space-x-16 md:space-y-0">
            <li className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">
              <Link href="/bahasa">Bahasa</Link>
            </li>
            <li className="text-slate-100 text-lg hover:text-[#F2EEBF] hover:underline hover:font-bold transition-all duration-500">
              <Link href="/wayang">Kebudayaan</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
