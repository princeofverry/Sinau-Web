import ContentHomePage from "./components/utilities/Content";
import HalamanUtama from "./HalamanUtama";
import Statistik from "./components/utilities/Content/statistik";

export default function Home() {
  return (
    <>
        <HalamanUtama />
        <ContentHomePage />
        <Statistik />
    </>
  );
}
