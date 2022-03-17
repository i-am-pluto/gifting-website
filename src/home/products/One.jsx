import React from "react";
import "./one.css";
function One() {
  let products = new Array();
  products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <center>
        <h2 style={{ marginBottom: "50px" }}>
          BEST SELLING <b>PRODUCTS</b>
        </h2>
      </center>

      <div className="container-xl d-flex justify-content-center">
        <div className="row">
          {products.map((products) => {
            return (
              <div className="col-md-3">
                <div className="product-wrapper mb-45 text-center">
                  <div className="product-img">
                    {" "}
                    <a href="#" data-abc="true">
                      {" "}
                      <img src="https://i.imgur.com/lAQxXCK.jpg" alt=""></img>
                    </a>{" "}
                    <span>
                      <i className="fa fa-rupee"></i> 41,000
                    </span>
                    <div className="product-action">
                      <div className="product-action-style">
                        {" "}
                        <a
                          className="action-plus"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          href="#"
                          data-abc="true"
                        >
                          {" "}
                          <i className="fa fa-plus"></i>{" "}
                        </a>{" "}
                        <a
                          className="action-heart"
                          title="Wishlist"
                          href="#"
                          data-abc="true"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>{" "}
                        </a>{" "}
                        <a
                          className="action-cart"
                          title="Add To Cart"
                          href="#"
                          data-abc="true"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default One;
