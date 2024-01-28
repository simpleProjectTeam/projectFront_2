import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function MainPage() {
  return (
    <div className="max-w-5xl max-h-screen m-auto mt-10">
      <Header />
      <Carousel />
    </div>
  );
}

export default MainPage;
