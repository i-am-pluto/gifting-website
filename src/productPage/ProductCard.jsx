import React from "react";
import "./ProductCard.css";
function ProductCard() {
  let productInfo = (
    <p>
      Harvest Vases are a reinterpretation
      <br /> of peeled fruits and vegetables as
      <br /> functional objects. The surfaces
      <br /> appear to be sliced and pulled aside,
      <br /> allowing room for growth.
    </p>
  );

  

  return (
    <div style={{ marginTop: "120px" }}>
      <div class="wrapper">
        <div class="product-img">
          <img src="http://bit.ly/2tMBBTd" height="100%" width="100%" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>Harvest Vase</h1>
            <h2>by studio and friends</h2>
            {productInfo}
          </div>
          +
          <div class="product-price-btn">
            <p>
              <span>78</span>$
            </p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-success button-buy"
              >
                buy now
              </button>

              <button
                type="button"
                className="btn btn-outline-warning button-add"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
