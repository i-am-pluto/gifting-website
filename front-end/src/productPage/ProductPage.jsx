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

  let Product = {
    // image: "https://i.ebayimg.com/images/g/PtgAAOSwKtlWrDvf/s-l400.jpg",
    productTitle: "AP",
    productSubtitle: "RR",
    productInfo:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
    productPrice: 200,
    // preview_img: [
    //   "https://i.ebayimg.com/images/g/PtgAAOSwKtlWrDvf/s-l400.jpg",
    //   "https://i.ebayimg.com/images/g/PtgAAOSwKtlWrDvf/s-l400.jpg",
    //   "https://i.ebayimg.com/images/g/PtgAAOSwKtlWrDvf/s-l400.jpg",
    //   "https://i.ebayimg.com/images/g/PtgAAOSwKtlWrDvf/s-l400.jpg",
    // ],
    infoText1:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
    infoText2:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
    InformationTable: {
      packageDimensions: "2x2x2",
      itemWeight: "2kg",
      manufacture: "Big Ass Production",
      id: "2312341",
      CustomerReviews: 6.9,
    },
  };
  let Artist = {
    artist_id: "20231",
    artist_name: "Riley Reid",
    // artist_pfp:
    //   "data:image/jpeg;base64,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",
    // artist_cover:
    //   "https://cache.desktopnexus.com/thumbseg/2534/2534963-bigthumbnail.jpg",
    artist_followers: 2314213124,
    artist_bio: "Pornstar & Entertainer",
  };

  let Reviews = [
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
    {
      author: "Daddy",
      upvotes: 20,
      Review:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur sequi, dolorem voluptates magnam provident deleniti adipisci ex inventore id itaque maiores error at possimus eius blanditiis autem. At, quam!",
      // pfp_image:
      //   "https://pr0.nicelocal.in/6qdaxqt5l9uP8UCWsYwkyg/220x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2auZQCd9fMUEh5Lz3pfPAmSVLA-JtmXcbxXM8bMlH9xJb6NgdQHuDCXtnfhdR-jzLg",
    },
  ];

  return (
    <div style={{ marginTop: "50px" }}>
      <ProductCard Product={Product} />
      <center>
        <h2>
          Gift <b>Images</b>
        </h2>
      </center>
      <ProductImages product={Product.preview_img} />

      <center>
        <h2>
          Customize <b>Gift</b>
        </h2>
        <h6>(optional)</h6>
      </center>

      {/* customizations */}
      <ProductCustomize />
      {/* information table */}
      <center>
        <h2>
          Information <b>Table</b>
        </h2>
      </center>
      <InformationTable
        infoText1={Product.infoText1}
        infoText2={Product.infoText2}
        informationTable={Product.InformationTable}
      />
      {/* about the artist */}
      <center>
        <h2>
          About The <b>Artist</b>
        </h2>{" "}
      </center>

      <ArtistCard Artist={Artist} />
      {/* reviews carousel */}
      <center>
        <h2>
          Customer <b>Review</b>
        </h2>{" "}
      </center>
      <CustomerReviews Reviews={Reviews} />
    </div>
  );
}

export default ProductPage;
