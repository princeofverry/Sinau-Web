import Carousel from "./components/utilities/Carousel";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

export default function Home() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}
