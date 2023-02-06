import React, { useState, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const Productslider = ({ children, Title }) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef();

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleNextbtn = () => {
    setScrollLeft(
      (containerRef.current.scrollLeft = containerRef.current.scrollLeft + 1100)
    );
  };

  const handlePrevbtn = () => {
    setScrollLeft(
      (containerRef.current.scrollLeft = containerRef.current.scrollLeft - 1100)
    );
  };

  return (
    <div className=" w-full  bg-[#f7f6f6]  rounded-lg ">
      <h2 className=" text-xl text-[#333] font-bold  p-2">{Title}</h2>
      <div className="  relative      ">
        <div
          className={`    duration-300    lg:auto-cols-[20%]                relative       overflow-x-scroll   scroll-auto scroll-hide  cursor-pointer ease-out  grid auto-cols-[25%]   grid-flow-col ${
            dragging ? null : "scroll-smooth"
          }`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {children}
        </div>

        <div
          className=" absolute  bottom-1/2 w-[25px] h-[25px] cursor-pointer "
          onClick={handlePrevbtn}
        >
          <GrFormPrevious size={30} />{" "}
        </div>
        <div
          className="absolute   right-0   bottom-1/2  w-[25px] h-[25px] cursor-pointer "
          onClick={handleNextbtn}
        >
          <GrFormNext size={30} />
        </div>
      </div>
    </div>
  );
};
