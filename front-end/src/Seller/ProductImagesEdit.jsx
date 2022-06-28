import React, { useState } from "react";
import upload from "../assets/img/uploadImage.png";

function ProductImagesEdit() {
  let [product, setProduct] = useState([""]);
  return (
    <div className="container-xxl">
      <div className="row">
        {product.map((prod, i) => {
          return (
            <div class="product-img">
              <div
                src={upload}
                style={{
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                  backgroundColor: "grey",
                }}
                className="zoom d-flex justify-content-center align-items-center"
                onClick={() => {
                  document
                    .getElementById(`add-product-card-image-${i}`)
                    .click();
                }}
              >
                <img
                  src={upload}
                  alt=""
                  srcset=""
                  id={`product-img-temp-${i}`}
                  style={{ width: "80px" }}
                />
              </div>

              <input
                type="file"
                id={`add-product-card-image-${i}`}
                style={{ display: "none" }}
                onChange={(input) => {
                  var reader = new FileReader();
                  reader.onload = (e) => {
                    document
                      .getElementById(`product-img-temp-${i}`)
                      .setAttribute("src", e.target.result);
                    document.getElementById(
                      `product-img-temp-${i}`
                    ).style.minWidth = "100%";
                    document.getElementById(
                      `product-img-temp-${i}`
                    ).style.minHheight = "100%";
                  };

                  reader.readAsDataURL(input.target.files[0]);
                }}
              />
            </div>
          );
        })}
      </div>
      <button
        className="col-sm product-image-div btn btn-outline-dark"
        id="add-product-image-button"
        onClick={(e) => {
          if (product.length < 4) setProduct([...product, ""]);
          else
            document
              .getElementById("add-product-image-button")
              .classList.add("disabled");
        }}
      >
        Add An Image
      </button>
    </div>
  );
}

export default ProductImagesEdit;
