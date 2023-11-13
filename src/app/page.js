import ContentHomePage from "./components/utilities/Content";
import HalamanUtama from "./HalamanUtama";
import Statistik from "./HalamanUtama/statistik";

export default function Home() {
  return (
    <>
      <HalamanUtama />
      <ContentHomePage />
      <Statistik/>
    </>
  );
}
