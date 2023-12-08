// pages/404.js
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#212759]">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="sm:text-4xl text-2xl font-bold mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="sm:text-lg text-md mb-8">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan coba
          halaman lain.
        </p>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Kembali ke Beranda
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
