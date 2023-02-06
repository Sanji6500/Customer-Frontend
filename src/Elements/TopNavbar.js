import React from "react";
import EmptyUser from "../Images/emptyUser.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Images/buysvg.svg";

const RenderTopNavbarname = [
  { PathName: "/", titleName: "Dashbord" },
  { PathName: "/Products", titleName: "Products" },
  { PathName: "/Adervertising", titleName: "Adervertising" },
  { PathName: "/AdervertisingBrowser", titleName: "Adervertising Browser" },
  { PathName: "/Settings", titleName: "Settings" },
];

function TopNavbar() {
  const location = useLocation();

  return (
    <div className="    bg-white w-full     fixed   z-10">
      <div className="  h-24  flex   items-center  lg:max-w-[1100px]  md:max-w-[900px]   justify-between   mx-auto ">
        <Link
          className=" flex justify-center  items-center space-x-3 p-6"
          to="/"
        >
          <span className="   text-[35px] text-[#333] font-bold  flex items-center">
            Horzion
          </span>
          <img
            src={Logo}
            height="40"
            width="40"
            alt=""
            className=" fill-black  "
          />
        </Link>

        <a
          className=" p-7 flex space-x-3 items-center MediumPoppins font-light text-[20px] "
          href="/"
        >
          <p>Markt Name</p>
          <img
            src={EmptyUser}
            height="50"
            width="50"
            alt=""
            className="rounded-full font-poppins"
          />
        </a>
      </div>
      <div className="   border-b-[1px] border-[#515b5d1A]"></div>
    </div>
  );
}
export default TopNavbar;
