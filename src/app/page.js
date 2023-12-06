"use client";

// import ContentHomePage from "./components/utilities/Content";
import HalamanUtama from "./HalamanUtama";
import BackToTop from "./components/utilities/Component/BackToTop";
import Catagories from "./components/utilities/Content/catagories";

export default function Home() {
  return (
    <>
        <HalamanUtama />
        <Catagories/>
        {/* <ContentHomePage /> */}
        <BackToTop url={"/"}/>
    </>
  );
}
