"use client";
import React, { useState } from "react";
import { toJavanese } from "carakanjs";

const TranslateJawa = () => {
  const [inputText, setInputText] = useState(""); // State untuk teks input
  const [translatedText, setTranslatedText] = useState(""); // State untuk hasil terjemahan

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const translated = toJavanese(text);
    setTranslatedText(translated);
  };
  return (
    <>
<<<<<<< HEAD
      <div>
  
        <h1 className="text-white font-bold text-center text-3xl">
=======
      <div className="flex flex-col place-items-center">
        <h1 className="text-white font-bold text-center text-xl sm:text-2xl">
>>>>>>> a89a85f3da26a82717d06aeb1ae8bcdb4e22e674
          Masukkan Latin
        </h1>
        <input
          className="w-3/4 sm:w-[554px] h-[63px] bg-[#4938A0] rounded-[20px] px-4 py-4 mt-4 text-white placeholder-white placeholder:font-medium focus:outline-none focus:ring-2 ring-white"
          type="text"
          placeholder="Masukkan teks..."
          value={inputText}
          onChange={handleInputChange}
        />
        <p className="my-4 font-bold text-base sm:text-lg text-white ">
          Hasil Terjemahan: {translatedText}
        </p>
      </div>
    </>
  );
};

export default TranslateJawa;
