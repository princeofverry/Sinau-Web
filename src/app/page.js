"use client";

import ContentHomePage from "./components/utilities/Content";
import HalamanUtama from "./HalamanUtama";
import Statistik from "./components/utilities/Content/statistik";
import BackToTop from "./components/utilities/Component/BackToTop";

export default function Home() {
  return (
    <>
        <HalamanUtama />
        <ContentHomePage />
        <Statistik />
        <BackToTop url={"/"}/>
    </>
  );
}
