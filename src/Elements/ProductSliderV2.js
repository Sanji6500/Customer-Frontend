import React, { useState } from "react";

export const ProductSliderV2 = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      title: "Card 1",
      content: "Card 1 content",
    },
    {
      title: "Card 2",
      content: "Card 2 content",
    },
    {
      title: "Card 3",
      content: "Card 3 content",
    },
  ];

  const handleNext = () => {
    if (currentIndex === cardData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cardData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className=" w-full overflow-x-scroll">
      <div
        className={` w-full h-full flex   transition-all ${
          3 === currentIndex ? "  translate-x-full" : ""
        }`}
      >
        {children}
      </div>

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
