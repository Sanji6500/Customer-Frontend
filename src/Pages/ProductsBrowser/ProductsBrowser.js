import React, { useState, useEffect, useRef } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MiniButton, NormalButton } from "../../Elements/Buttons";
import { Slider } from "../../Elements/Slider";
import { BiChevronDown } from "react-icons/bi";
import { MdRoom } from "react-icons/md";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl"; //
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";

function ProductsBrowser({ Trigger, setclose, data }) {
  const divRef = useRef();
  const [SidebarDropdown, setSidebarDropdown] = useState(true);

  useEffect(() => {
    if (Trigger) divRef.current.scrollTop = 500;
  }, [Trigger]);

  const handleScroll = () => {
    if (divRef.current.scrollTop === 0) setclose(false);
  };

  return Trigger ? (
    <React.Fragment>
      <div
        ref={divRef}
        onScroll={handleScroll}
        className="   overflow-y-scroll  fixed    z-20 w-full inset-0 h-modal md:h-full flex justify-center items-center"
      >
        <div className="relative p-4   w-full   translate-y-[900px]">
          <div
            className={` border-0 rounded-lg shadow-lg relative  
                flex-col    p-3 bg-white outline-none focus:outline-none  min-h-[100vh]   `}
          >
            <div className="flex   lg:max-w-[1024px]  md:max-w-[860px]   max-w-[700px]       justify-between   mx-auto pt-[125px] ease-out duration-300">
              <div className=" flex flex-wrap w-full">
                <div className="  lg:w-[55%] w-full">
                  <Slider image={data.ProductID.Photos} />
                </div>
                <div className="  lg:w-[45%] w-full">
                  <div className=" flex flex-col    pb-3  px-[2.307692rem] space-y-2">
                    <div className="  text-[20px]  font-semibold text-[#333] ">
                      {data.ProductID.ProductName}
                    </div>
                    <div className="text-[15px]  font-semibold text-[#858484]">
                      {data.ProductID.SubCategory_ID.SubCategoryName}
                    </div>
                  </div>

                  <div className=" flex  items-center  px-8 pb-4">
                    <div className=" text-[20px]   font-bold text-[#df0000]  m-[1px] font-proximaNova ">
                      {data.PriceAfterDiscount}
                      <span> $</span>
                    </div>

                    <div className=" w-4  text-[16px]  ml-3   font-medium text-Darky  line-through  m-[1px] font-proximaNova  ">
                      {data.PriceBefordiscount}
                      <span>$</span>
                    </div>
                  </div>
                  <div className="flex w-full    pb-[18px] px-[30px]">
                    <div className=" w-3/4 mr-3 ">
                      <NormalButton value="zum online Shop" />
                    </div>
                    <div className=" w-1/4">
                      <NormalButton>
                        <AiOutlineShareAlt size={25} />
                      </NormalButton>
                    </div>
                  </div>

                  <div
                    className=" flex w-full  justify-between    cursor-pointer items-center  py-3 space-x-3    "
                    onClick={() => setSidebarDropdown(!SidebarDropdown)}
                  >
                    <p className="   text-[17px]  font-semibold text-[#333]   ">
                      Productbeschreibung
                    </p>

                    <BiChevronDown
                      size={18}
                      className={`${SidebarDropdown && "rotate-180  bg "}`}
                      style={{ color: "#858484" }}
                    />
                  </div>

                  <div
                    className={` overflow-y-hidden  block   pl-[60px] ${
                      SidebarDropdown
                        ? " max-h-64 ease-in-out duration-300 "
                        : "max-h-0  ease-in-out duration-300"
                    }`}
                  >
                    <div className="  block  text-[15px]  font-proximaNova  leading-6 font-light text-[#5c5c5c]">
                      {data.ProductID.infos !== ""
                        ? data.ProductID.infos
                        : " Du kannst jedes Gefäß mit Zapfhahn auf diesen Bambushalter  stellen, um es in eine erhöhte Position zu bringen. und    dadurch leichter benutzen zu können. Der Halter kann bei  Nichtgebrauch platzsparend zusammengeklappt werden."}
                    </div>
                  </div>
                </div>

                <div className="lg:w-[50%] w-full ">
                  <div className=" text-[17px]  font-semibold text-[#333]  ">
                    Nächstgelegene Filialen
                  </div>
                  <Map
                    initialViewState={{
                      longitude: 7.420166735622445,
                      latitude: 51.529450528049296,
                      zoom: 14,
                    }}
                    style={{ width: "100%", height: 400, borderRadius: 8 }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="pk.eyJ1IjoiYW5hczY1MDAiLCJhIjoiY2xiN3RnMXRsMDJkczNxcG1lcHRodXQ3OSJ9.d5ExLhXg6iOVvCzOBo7e_w"
                  >
                    <Marker
                      latitude="51.529450528049296"
                      longitude="7.420166735622445"
                    >
                      <MdRoom size={32} />
                    </Marker>
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="opacity-25 fixed inset-0 z-10 bg-black"
        onClick={() => setclose(false)}
      ></div>
    </React.Fragment>
  ) : null;
}

export default ProductsBrowser;
