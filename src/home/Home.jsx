import React from "react";
import RollingCarousel from "./Carousel/RollingCarousel";
import CategoryContainer from "./categories/CategoryContainer";
import "./Home.css";
import One from "./products/One";
import Two from "./products/Two";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <CategoryContainer />
        <RollingCarousel />
        <One />
        <Two />
      </div>
    </div>
  );
}

export default Home;
