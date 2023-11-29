import Link from "next/link";
import React from "react";

const BackToTop = ({ url }) => {
  return (
    <>
      <div className="w-10 h-10 flex rounded-full bg-sky-200 bottom-5 right-5 fixed cursor-pointer animate-bounce scroll-smooth">
        <Link href={url} className="text-xl m-auto">
          🔝
        </Link>
      </div>
    </>
  );
};

export default BackToTop;
