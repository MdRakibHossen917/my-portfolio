import React from "react";
import { Outlet } from "react-router";

import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-72px)]">
        <Outlet></Outlet>
      </div>
     <div className="flex-grow">
         <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
