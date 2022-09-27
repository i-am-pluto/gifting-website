import React from "react";
import "./ProductCard.css";
function ProductCard({ product }) {
  console.log(product);
  const productInfo = product.product_desc;
  const productTitle = product.product_name;
  const image = product.mainImage;
  const productSubtitle = product.artist_name;
  const productImage = product.main_image_url;
  const productPrice = 0;

  return (
    <div style={{ marginTop: "120px" }}>
      <div class="wrapper">
        <div class="product-img">
          <img src={productImage} height="100%" width="100%" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{productTitle}</h1>
            <h2>{productSubtitle}</h2>
            <p className="color-dark">{productInfo}</p>
          </div>
          +
          <div class="product-price-btn">
            <p>
              <span>{productPrice}</span>$
            </p>
            <br />
            <br />

            <div
              className="d-flex justify-content-end"
              style={{ marginTop: "-10px" }}
            >
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
