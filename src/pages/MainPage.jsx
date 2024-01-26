import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function MainPage() {
  return (
    <div className="w-2/5 h-full m-auto mt-10">
      <Header />
      <Carousel />
    </div>
  );
}

export default MainPage;
