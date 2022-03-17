import React from "react";
import "./Two.css";
function Two() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const prod_arrays = [];
  console.log("hi");
  for (var i = 0; i < products.length; i += 4) {
    var sliced = products.slice(i, i + 4);
    console.log(sliced);
    prod_arrays.push(sliced);
  }
  console.log(prod_arrays);

  return (
    <div>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-md-12">
            <center>
              <h2>
                Recommended <b>Products</b>
              </h2>
            </center>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <div className="carousel-inner">
                {prod_arrays.map((products, i) => {
                  let hi = "";
                  console.log(products);
                  if (i == 0) hi = "active";
                  return (
                    <div className={`item carousel-item ${hi}`}>
                      <div class="row">
                        {products.map((product, i) => {
                          console.log(product);
                          return (
                            <div className="col-sm-3">
                              <div className="thumb-wrapper">
                                <span className="wish-icon">
                                  <i className="fa fa-heart-o"></i>
                                </span>
                                <div className="img-box">
                                  <img
                                    src="/examples/images/products/ipad.jpg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>
                                <div className="thumb-content">
                                  <h4>Apple iPad</h4>
                                  <div className="star-rating">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="fa fa-star"></i>
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="fa fa-star-o"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <p className="item-price">
                                    <strike>$400.00</strike> <b>$369.00</b>
                                  </p>
                                  <a href="#" className="btn btn-primary">
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Two;
