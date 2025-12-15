import React from "react";
import { Outlet } from "react-router";

import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
