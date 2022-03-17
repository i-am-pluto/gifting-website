import React from "react";
import "./ProductsOfArtist.css";

function ProductsOfArtist() {
  let products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // make set of 3

  let pArr = [];
  products.forEach((element, i) => {
    console.log(i);
    if (i % 3 === 0) pArr.push([element]);
    else pArr[pArr.length - 1].push(element);
  });
  console.log(pArr);

  return (
    <div className="container-xxl">
      {pArr.map((el, i) => {
        return (
          <div className="row">
            {el.map((el2, i2) => {
              return (
                <div className="col mb-4">
                  <div className="gallery-item" tabindex="0">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuVQbKqNHJpiXRfeHAjr176vs_hk7HloR8Pw&usqp=CAU`}
                      className="gallery-image"
                      alt=""
                    />

                    <div className="gallery-item-info">
                      <ul>
                        <li>
                          <i
                            className="fas fa-shopping-cart"
                            aria-hidden="true"
                          ></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ProductsOfArtist;
