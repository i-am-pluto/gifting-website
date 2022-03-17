import React from "react";
import ArtistCard from "./ArtistCard";
import CustomerReviews from "./CustomerReviews";
import InformationTable from "./InformationTable";
import ProductCard from "./ProductCard";
import ProductCustomize from "./ProductCustomize";
import ProductImages from "./ProductImages";
import "./ProductPage.css";
function ProductPage() {
  let imgSrc, prodTitle, subTitle, prodInfo, prodPrice, product;

  return (
    <div style={{ marginTop: "50px" }}>
      <ProductCard
        image={imgSrc}
        productTitle={prodTitle}
        productSubtitle={subTitle}
        productInfo={prodInfo}
        productPrice={prodPrice}
      />
      <center>
        <h2>
          Gift <b>Images</b>
        </h2>
      </center>
      <ProductImages product={product} />

      <center>
        <h2>
          Customize <b>Gift</b>
        </h2>
      </center>

      {/* customizations */}
      <ProductCustomize />
      {/* information table */}
      <center>
        <h2>
          Information <b>Table</b>
        </h2>
      </center>
      <InformationTable />
      {/* about the artist */}
      <center>
        <h2>
          About The <b>Artist</b>
        </h2>{" "}
      </center>

      <ArtistCard />
      {/* reviews carousel */}
      <center>
        <h2>
          Customer <b>Review</b>
        </h2>{" "}
      </center>
      <CustomerReviews />
    </div>
  );
}

export default ProductPage;
