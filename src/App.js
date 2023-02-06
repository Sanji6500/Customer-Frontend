import React from "react";
import Sidebar from "./Elements/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/main";

import TopNavbar from "./Elements/TopNavbar";
import { Footer } from "./Elements/Footer";

function App() {
  return (
    <div className="  h-screen overflow-y-scroll ">
      <Router>
        <TopNavbar />

        <div className=" flex  items-center lg:max-w-[1024px]  md:max-w-[860px]   max-w-[700px]       justify-between   mx-auto pt-[125px] ease-out duration-300 ">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
