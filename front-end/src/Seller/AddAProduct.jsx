import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AddAProduct.css";
import ArtistCardEdit from "./ArtistCardEdit";
import InformationTableEdit from "./InformationTableEdit";
import ProductCardEdit from "./ProductCardEdit";
import ProductImagesEdit from "./ProductImagesEdit";

function AddAProduct() {
  let imgSrc, prodTitle, subTitle, prodInfo, prodPrice, product;

  const InformationTable = {
    packageDimensions: "height x width x depth",
    itemWeight: "weight in kg",
    manufacture: "Artist Signature",
  };

  let [artist, setArtist] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/artist/${id}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        setArtist(await response.json());
      }
    };
    fetchData();
  }, []);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    InformationTable.itemWeight = document.getElementById(
      "product-info-weight-edit"
    ).value;
    InformationTable.packageDimensions = document.getElementById(
      "product-info-package-edit"
    ).value;
    InformationTable.manufacture = document.getElementById(
      "product-info-manufacture-edit"
    ).value;

    const obj = {
      product_name: document.getElementById("product-name-edit").value,
      product_desc: document.getElementById("product-desc-edit").value,
      product_price: Number(
        document.getElementById("product-price-edit").value
      ),
      count_in_stock: Number(
        document.getElementById("product-stock-edit").value
      ),

      customization: document.getElementById("product-customization-edit")
        .value,
      info1: document.getElementById("product-info1-edit").value,
      info2: document.getElementById("product-info2-edit").value,
      informationTable: InformationTable,
    };
    let seen = [];
    const body = JSON.stringify(obj, function (key, val) {
      if (val != null && typeof val == "object") {
        if (seen.indexOf(val) >= 0) {
          return;
        }
        seen.push(val);
      }
      return val;
    });
    console.log(body);
    const response = await fetch(
      `http://localhost:5000/api/product/${id}/add`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }
    );

    const data = await response.json();
    if (data.success) {
      history.push(`/product/${data.id}`);
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ marginTop: "90px" }}>
      <center>
        <h1>
          <b>Product Information</b>
        </h1>
        <h6>(the fields will appear as they look on this screen)</h6>
      </center>
      <ProductCardEdit />
      <center>
        <h2>
          Gift <b>Images</b>
        </h2>
      </center>
      <ProductImagesEdit />
      <center>
        <h2>
          Customize <b>Gift</b>
        </h2>
        <h6>(optional)</h6>
      </center>
      {/* customizations */}
      <div className="form-outline w-100 container">
        <textarea
          className="form-control"
          id="product-customization-edit"
          placeholder="Enter Questions for The Customer Regarding Customization"
          rows="4"
          style={{ background: "#fff" }}
        ></textarea>
      </div>
      <br />
      {/* information table */}
      <center>
        <h2>
          Information <b>Table</b>
        </h2>
      </center>
      <InformationTableEdit informationTable={InformationTable} />
      {/* about the artist */}
      <center>
        <h2>
          About The <b>Artist</b>
        </h2>{" "}
      </center>
      <ArtistCardEdit Artist={artist} />
      <button onClick={handleSubmit} className="col-sm btn btn-warning">
        submit
      </button>
    </div>
  );
}

export default AddAProduct;
