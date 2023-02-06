import React from "react";

import { useState, useRef, useEffect } from "react";
import { useGetWidth } from "../Hocks/useGetWidth";
import noImg from "../Images/no_img_avaliable.jpg";

export const Slider = ({ image }) => {
  const width = useGetWidth();
  const sliderwidthMobile = 1024 > width && width / 1.13;
  let Slidewidth = width >= 1024 ? 364 : sliderwidthMobile;
  let Dragratio = Slidewidth / 5;
  const images = [];

  images.push(process.env.REACT_APP_BACKEND + image[0].replace("\\", "/"));
  images.push(noImg);
  const Data = images.map((data) => data);

  const [selectedImage, setRightImage] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [sliderNumber, setslider] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentX(-Slidewidth * sliderNumber);
    setRightImage(sliderNumber);
  }, [sliderNumber, Slidewidth]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - currentX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX - initialX);
  };

  const handleMouseUp = async (e) => {
    setIsDragging(false);

    setInitialX(0);
    /// Adjust the position   If you drag the first image to the right and the last image to the left

    if (currentX <= (images.length - 1) * -Slidewidth)
      return setCurrentX((images.length - 1) * -Slidewidth);
    if (currentX >= 1) return setCurrentX(-Slidewidth * sliderNumber);

    /////Adjust the position  if the picture is dragged left and right

    if (
      currentX <= -Slidewidth * sliderNumber + Dragratio &&
      currentX > -Slidewidth * sliderNumber
    )
      return setCurrentX(-Slidewidth * sliderNumber);

    if (
      currentX >= -Slidewidth * sliderNumber - Dragratio &&
      currentX < -Slidewidth * sliderNumber
    )
      return setCurrentX(-Slidewidth * sliderNumber);
    /////set the new  position  if the  next picture is dragged left and right

    if (currentX <= -Slidewidth * sliderNumber - Dragratio) {
      return setslider(sliderNumber + 1);
    } else if (currentX > -Slidewidth * sliderNumber + Dragratio)
      return setslider(sliderNumber - 1);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    console.log(Data);
    /// Adjust the position   If you drag the first image to the right and the last image to the left
    if (currentX <= (images.length - 1) * -Slidewidth)
      return setCurrentX((images.length - 1) * -Slidewidth);
    if (currentX >= 1) return setCurrentX(-Slidewidth * sliderNumber);
    /////Adjust the position  if the picture is dragged left and right
    if (
      currentX <= -Slidewidth * sliderNumber + Dragratio &&
      currentX > -Slidewidth * sliderNumber
    )
      return setCurrentX(-Slidewidth * sliderNumber);
    if (
      currentX >= -Slidewidth * sliderNumber - Dragratio &&
      currentX < -Slidewidth * sliderNumber
    )
      return setCurrentX(-Slidewidth * sliderNumber);
    /////set the new  position  if the  next picture is dragged left and right
    if (currentX <= -Slidewidth * sliderNumber - Dragratio) {
      return setslider(sliderNumber + 1);
    } else if (currentX >= -Slidewidth * sliderNumber + Dragratio)
      return setslider(sliderNumber - 1);
  };

  return (
    <div className="  flex w-full flex-wrap  justify-center ">
      <div className=" lg:flex    hidden  flex-col space-y-1  lg:w-[75px] w-0 mr-3">
        {images.map((Data, index) => (
          <div className="h-[75px] w-[75px] mb-4">
            <div
              style={{
                backgroundImage: ` url(${Data})`,
              }}
              className={` h-[75px] w-[70px]  bg-[50%]   bg-contain bg-no-repeat      ${
                selectedImage === index
                  ? "before:content-[''] before:h-[75px] before:w-[2px] before:bg-black  before:block   before:relative before:left-[-5px] "
                  : ""
              }  `}
              onClick={() => {
                setRightImage(index);
                setCurrentX(-Slidewidth * index);
              }}
            ></div>
          </div>
        ))}
      </div>
      {/* ///------- */}
      <div className="    lg:w-[364px] w-full       overflow-x-hidden  relative  ">
        <div
          className={`  touch-pan-x  scroll-smooth ease-in-out   `}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `translate3d(${currentX}px,0,0)`,

            userSelect: "none",
            cursor: "grab",
            transition: isDragging ? "none" : "transform 0.3s linear 0s",
          }}
        >
          {images.map((Data, index) => (
            <div
              style={{
                left: `${index * Slidewidth}px`,
                transition: "transform 0.4s linear 0s;",
                transform: "scale(1)",
                width: `${Slidewidth}px`,
              }}
              className={`   lg:h-[400px]  h-[340px]    bg-contain bg-no-repeat transio ${
                index > 0 ? `  top-0   absolute  ` : null
              }`}
            >
              <div
                style={{
                  backgroundImage: ` url(${Data}) `,
                  width: `${Slidewidth}px`,
                }}
                className={`  lg:h-[400px]  h-[340px] bg-[50%]  bg-contain bg-no-repeat `}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* ///------- */}
      <div className=" lg:hidden inline-block">
        {images.map((Data, index) => (
          <div
            className={` h-2 w-2 rounded-[50%] bg-[#e4e1e1] inline-block cursoer-pointer opacity-80 m-[2px] ${
              selectedImage === index ? "  bg-[#aeaeae]      " : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
