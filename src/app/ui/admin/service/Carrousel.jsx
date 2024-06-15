"use client";
import { useState } from "react";
import Card from "./Card.jsx";

const Carrousel = ({ cat }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < cat?.services.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="px-5 relative flex items-center gap-2">
      <button
        className="absolute w-[60px] h-[60px] rounded-full bg-bgSecondary left-2 top-1/2 transform -translate-y-1/2"
        onClick={handlePrevClick}
        disabled={currentIndex === 0}
      >
        &#9664;
      </button>
      <div className="flex overflow-hidden w-full">
        {cat?.services.map((service, index) => (
          <div
            key={index}
            className={`transition-transform duration-300 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{ width: "100%" }}
          >
            <Card service={service} />
          </div>
        ))}
      </div>
      <button
        className="absolute w-[60px] h-[60px] rounded-full bg-bgSecondary right-2 top-1/2 transform -translate-y-1/2"
        onClick={handleNextClick}
        disabled={currentIndex === cat?.services.length - 1}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carrousel;
