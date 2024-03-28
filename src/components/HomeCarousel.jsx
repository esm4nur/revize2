import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-2 shadow p-0 rounded">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="object-fit-cover w-100 rounded"
                src="https://www.nkfu.com/wp-content/uploads/2021/05/eczanehizmet.png"
                alt="slider image"
                style={{ height: 600 }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
