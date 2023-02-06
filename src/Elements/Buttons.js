import React from "react";

export const SubmitButton = ({ value, width }) => {
  return (
    <button
      type="submit"
      className="    py-2 px-2 bg-[#007FC3]  border shadow-sm rounded-md w-full text-sm     text-white  font-InterSemiBold   font-medium  "
      style={{ width: width }}
    >
      {value}
    </button>
  );
};
export const NormalButton = ({ value, onClick, width, children }) => {
  return (
    <button
      type="button"
      className="    flex justify-center  py-2 px-2 bg-[#007FC3] font-proximaNova   lg:text-[17px]   border shadow-sm rounded-full w-full  text-white   "
      style={{ width: width }}
      onClick={onClick}
    >
      {value}
      {children}
    </button>
  );
};

export const MiniButton = ({ value, onClick, width }) => {
  return (
    <button
      type="button"
      className="     py-2 px-2  bg-[#007FC3]  border shadow-sm rounded-md w-full       text-white  font-InterSemiBold   font-medium  "
      style={{ width: width }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
