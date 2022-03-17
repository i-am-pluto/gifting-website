import React from "react";
import img from "./assets/img/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./assets/css/product.css";

function CarouselProduct() {
  return (
    <div className="item">
      <div className="work">
        <div
          className="img d-flex align-items-center justify-content-center rounded"
          style={{ backgroundImage: `url(${img})` }}
        >
          <a
            href="#"
            className="icon d-flex align-items-center justify-content-center"
          >
            <span class="ion-ios-cart" style={{ color: "black" }}></span>
          </a>
        </div>
        {/* product text */}
        <div className="text pt-3 w-100 text-center">
          <h3>
            <a href="#">Product Name</a>
          </h3>
          <span>Artist Name</span>
        </div>
      </div>
    </div>
  );
}

export default CarouselProduct;
