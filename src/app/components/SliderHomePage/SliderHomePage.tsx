import CarouselClient from "./CarouselClient";
import CarouselServer from "./CarouselServer";

function SliderHomePage() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute inset-0">
        <CarouselClient />
      </div>
    </div>
  );
}

export default SliderHomePage;
