"use client";
import React, { useState } from "react";
import { toLatin } from "carakanjs";

function TranslateLatin() {
  const [inputText, setInputText] = useState(""); // State untuk teks input
  const [translatedText, setTranslatedText] = useState(""); // State untuk hasil terjemahan
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const translated = toLatin(text);
    setTranslatedText(translated);
  };
  return (
    <div className="flex flex-col place-items-center">
      <p className="mt-8 text-white font-bold text-center text-xl sm:text-2xl">
        Masukkan Aksara
      </p>
      <input
        type="text"
        className="w-3/4 sm:w-[554px] h-[63px] bg-[#4938A0] rounded-[20px] px-4 py-4 mt-4 text-white placeholder-white placeholder:font-medium focus:outline-none focus:ring-2 ring-white"
        placeholder="Masukkan teks..."
        value={inputText}
        onChange={handleInputChange}
      />
      <p className="my-4 font-bold text-base sm:text-lg text-white text-left">
        Hasil Terjemahan: {translatedText}
      </p>
    </div>
  );
}

export default TranslateLatin;
