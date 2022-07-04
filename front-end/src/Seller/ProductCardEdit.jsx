
import upload from "../assets/img/uploadImage.png";
import "./ProductCardEdit.css";

function ProductCardEdit() {
  return (
    <div style={{ marginTop: "120px" }}>
      <div class="wrapper">
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
              document.getElementById("add-product-card-image").click();
            }}
          >
            <img
              src={upload}
              alt=""
              srcset=""
              id="product-img-temp"
              style={{ width: "80px" }}
            />
          </div>

          <input
            type="file"
            id="add-product-card-image"
            style={{ display: "none" }}
            onChange={(input) => {
              var reader = new FileReader();
              reader.onload = (e) => {
                document
                  .getElementById("product-img-temp")
                  .setAttribute("src", e.target.result);
                document.getElementById("product-img-temp").style.minWidth =
                  "100%";
                document.getElementById("product-img-temp").style.minHeight =
                  "100%";
              };

              reader.readAsDataURL(input.target.files[0]);
            }}
          />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>
              <input
                type="text"
                name="product-name-edit"
                id="product-name-edit"
                className="form-control"
                placeholder="Product Title"
              />
            </h1>
            <h2>
              (<i>Artist Name</i>)
            </h2>
            <p className="color-dark">
              <textarea
                className="form-control"
                maxLength={200}
                placeholder="Product Description (in upto 200 words)"
                style={{ height: "100%" }}
                id="product-desc-edit"
              />
            </p>
          </div>
          <p style={{ fontSize: "15px" }} className="row">
            <input
              type="number"
              name="product-price-edit"
              className="form-control col-lg-5"
              id="product-price-edit"
              placeholder="price in &#8377;"
            />
            <input
              type="number"
              name="product-stock-edit"
              className="form-control col-lg-7"
              id="product-stock-edit"
              placeholder="Number of stocks"
            />
          </p>
          <div class="product-price-btn">
            <div
              className="d-flex justify-content-end"
              //   style={{ marginTop: "-10px" }}
            >
              <button
                type="button"
                className="btn btn-outline-success button-buy disabled"
              >
                buy now
              </button>

              <button
                type="button"
                className="btn btn-outline-warning button-add disabled"
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

export default ProductCardEdit;
