import { useEffect, useRef, useState } from "react";

import Esstisch from "../Images/essetisch.png";

export const SliderProductCard = ({}) => {
  return (
    <div className="   p-2 ">
      <div className=" bg-white  text-[#333] border border-[#ccc]    flex  flex-col  rounded-lg">
        <a href="/" draggable="false">
          <div className="  m-2   flex  flex-col justify-center items-center">
            <img
              src={Esstisch}
              alt="aaa"
              className="w-auto"
              height="140"
              width="160"
            />
          </div>

          <div className="  p-2 ">
            <div className=" flex flex-col ">
              <p className=" text-sm  text-Darky m-[1px] font-proximaNova  ">
                anas
              </p>
              <p className="   text-[20px] text-base truncatem m-[1px]    font-normal font-proximaNova">
                Essetish
              </p>
              <p className=" text-[19px]   font-bold text-[#df0000]  m-[1px] font-proximaNova ">
                50
                <span> $</span>
              </p>

              <p className=" w-4 relative text-[12px]  text-Darky  line-through  m-[1px] font-proximaNova  ">
                75
                <span>$</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export const ProductCard = ({
  image,
  SuperMarktName,
  ProductName,
  Price,
  PriceBeforDiscount,
  onClick,
  key,
}) => {
  return (
    <div className="   p-2  lg:w-1/5  md:w-1/4   sm:w-1/4 w-1/3  ">
      <div
        className=" bg-white  text-[#333] border border-[#ccc]    flex  flex-col  rounded-lg"
        onClick={() => onClick()}
      >
        <div className="  m-2   h-40 flex  flex-col justify-center items-center">
          <img
            src={process.env.REACT_APP_BACKEND + image}
            alt="aaa"
            className="   object-cover  max-h-40  "
          />
        </div>

        <div className="  p-2 ">
          <div className=" flex flex-col  ">
            <p className=" text-sm  text-Darky m-[1px] font-proximaNova  ">
              {SuperMarktName}
            </p>
            <p className="   text-[20px] text-base truncatem m-[1px]  overflow-hidden whitespace-nowrap text-ellipsis   font-normal font-proximaNova">
              {ProductName}
            </p>
            <p className=" text-[19px]   font-bold text-[#df0000]  m-[1px] font-proximaNova ">
              {Price}
              <span> $</span>
            </p>

            <p className=" w-4 relative text-[12px]  text-Darky  line-through  m-[1px] font-proximaNova  ">
              {PriceBeforDiscount}
              <span>$</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
