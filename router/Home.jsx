import Carousel from "../src/Components/Carousel/Carousel";
import { drugs, packages, vitamin } from "../src/assets/injex";
const slides = [packages, vitamin];
const Home = () => {
  return (
    <>
      <Carousel>
        <div className="max-w-full h-[20rem] flex gap-8">
          {slides.map((slide, index) => (
            <img key={index} src={slide} />
          ))}
        </div>
      </Carousel>
    </>
  );
};

export default Home;
