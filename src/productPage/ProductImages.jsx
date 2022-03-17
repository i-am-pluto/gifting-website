import React from "react";
import "./productImages.css";

function ProductImages() {
  let productImages = [1, 2, 3, 4, 5];

  return (
    <div className="container-xxl">
      <div className="row">
        {productImages.map(() => {
          return (
            <div className="col-sm product-image-div">
              <img
                src="https://assets.vogue.com/photos/6128027eb5cae63a108a2de7/master/w_1600%2Cc_limit/liana-shoes.jpg"
                alt=""
                srcset=""
                className="product-image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
