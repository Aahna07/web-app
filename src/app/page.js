"use client";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Description from "./components/Description/Description";

const page = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <Footer />
    </div>
  );
};

export default page;
