import ContentHomePage from "./components/utilities/Content";
import HalamanUtama from "./HalamanUtama";
import BackToTop from "./components/utilities/Component/BackToTop";

export default function Home() {
  return (
    <>
        <HalamanUtama />
        <ContentHomePage />
        <BackToTop url={"/"}/>
    </>
  );
}
