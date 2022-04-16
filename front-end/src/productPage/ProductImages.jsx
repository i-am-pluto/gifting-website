import React from "react";
import "./productImages.css";

function ProductImages({ product }) {
  return (
    <div className="container-xxl">
      <div className="row">
        {product.map((prod) => {
          return (
            <div className="col-sm product-image-div">
              <img src={prod} alt="" srcset="" className="product-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
