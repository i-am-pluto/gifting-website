import React from "react";
import "./one.css";
function One() {
  let ProductData = [
    {
      productId: 2012030,
      name: "Ass",
      image:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/05/13/16208974262086.jpg",
      artistName: "Lana Rhodes",
      price: 200,
    },
    {
      productId: 2012039,
      name: "Anal",
      image:
        "https://qph.fs.quoracdn.net/main-qimg-fca749b950f305ddbf0a4cb2854b6ad1-pjlq",
      artistName: "Riley Reids",
      price: 200,
    },
    {
      productId: 2012041,
      name: "Blow job",
      image:
        "https://thumb-lvlt.xhcdn.com/a/2nKm7fgwe2hlaWWPk1zisQ/002/255/315/526x298.4.webp",
      artistName: "Sunny Leone",
      price: 200,
    },
    {
      productId: 2012046,
      name: "Ass",
      image:
        "https://i1.sndcdn.com/artworks-PZOnPSbRx5SlcIfY-QpdgbA-t500x500.jpg",
      artistName: "Lana Rhodes",
      price: 200,
    },
    {
      productId: 2012047,
      name: "Anal",
      image:
        "https://qph.fs.quoracdn.net/main-qimg-fca749b950f305ddbf0a4cb2854b6ad1-pjlq",
      artistName: "Riley Reids",
      price: 200,
    },
    {
      productId: 2012049,
      name: "Ass",
      image:
        "https://i1.sndcdn.com/artworks-PZOnPSbRx5SlcIfY-QpdgbA-t500x500.jpg",
      artistName: "Lana Rhodes",
      price: 200,
    },
  ];

  return (
    <div>
      <center>
        <h2 style={{ marginBottom: "50px", marginTop: "50px" }}>
          Best <b>Selling</b>
        </h2>
      </center>

      <div className="container-xl d-flex justify-content-center">
        <div className="row">
          {ProductData.map((product) => {
            return (
              <div className="col-md-3">
                <div className="product-wrapper mb-45 text-center">
                  <div className="product-img-2">
                    <a
                      href={"/product" + product.productId}
                      className="product-link"
                      data-abc="true"
                    >
                      <img
                        src={product.image}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      ></img>
                    </a>
                    <span>
                      <i className="fa fa-rupee"></i> 41,000
                    </span>
                    <div className="product-action">
                      <div className="product-action-style">
                        <a
                          className="action-heart"
                          title="Wishlist"
                          href="/wishlist"
                          data-abc="true"
                        >
                          {" "}
                          <i className="fa fa-heart"></i>{" "}
                        </a>
                        <a
                          className="action-cart"
                          title="Buy"
                          href={"/product/" + product.productId}
                          data-abc="true"
                        >
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </a>
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
