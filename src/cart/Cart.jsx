import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsOfArtist from "../profile/ProductsOfArtist";
import "./Cart.css";

function Cart() {
  let [products, setProducts] = useState([1, 2, 3, 4]);
  let [price, setPrice] = useState([132.0]);

  function deleteProduct(e) {
    let id = e.target.id;
    id = id.substring(13);
    console.log(id);
    let newProducts = [...products];
    newProducts.splice(Number(id), 1);
    setProducts(newProducts);
  }

  useEffect(() => {
    // find sum of all products
  }, []);

  return (
    <div style={{ marginTop: "120px", marginBottom: "60px" }}>
      <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  {products.length}
                </div>
              </div>
            </div>
            {products.map((e, i) => {
              return (
                <div class="row">
                  <div class="row main align-items-center">
                    <div class="col-2">
                      <img
                        class="img-s img-fluid"
                        src="https://i.imgur.com/1GrakTl.jpg"
                      />
                    </div>
                    <div class="col">
                      <div class="row text-muted">Shirt</div>
                      <div class="row">Blue T-shirt - {i}</div>
                    </div>
                    <div class="col">
                      {" "}
                      <a href="#" className="text-a">
                        -
                      </a>
                      <a href="#" className="text-a count-prod">
                        1
                      </a>
                      <a href="#" className="text-a">
                        +
                      </a>{" "}
                    </div>
                    <div class="col">
                      &euro; 44.00{" "}
                      <span
                        class="close btn"
                        id={`deleteButton-${i}`}
                        onClick={deleteProduct}
                      >
                        &#10005;
                      </span>
                    </div>
                  </div>
                  <hr className="hr-line" />
                </div>
              );
            })}
            <div class="back-to-shop">
              <a href="#">
                <i className="fa fa-arrow-left"></i>
              </a>
              <span class="text-muted ml-2">Back</span>
            </div>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5 className="h5-line">
                <b>Summary</b>
              </h5>
            </div>
            <hr className="hr-line" />
            <div class="row p-3">
              <div class="col" style={{ paddingLeft: "0px" }}>
                ITEMS {products.length}
              </div>
              <div class="col text-right">&euro; {price}</div>
            </div>
            <form className="form-summary">
              <p>SHIPPING</p>{" "}
              <select className="select-cart">
                <option class="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
              </select>
              <p>GIVE CODE</p>{" "}
              <input
                className="input-cart"
                id="code"
                placeholder="Enter your code"
              />
            </form>
            <div
              class="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right">&euro; 137.00</div>
            </div>{" "}
            <button class="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
