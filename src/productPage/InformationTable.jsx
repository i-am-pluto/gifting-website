import React from "react";

function InformationTable() {
  return (
    <div className="container d-flex justify-content-center mt-5">
      {/* <div className="row"> */}
      <div className="col-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        aliquam possimus, ut ea culpa, consequuntur voluptatum quidem ex itaque
        adipisci tenetur vel. Ipsum asperiores, deserunt tenetur architecto ipsa
        possimus vero.
      </div>
      <div className="col-sm">
        <div className="table">
          <thead>
            <tr>
              <th className="">Key</th>
              <th>Info</th>
            </tr>
          </thead>
          <tr>
            <td>Package Dimensions</td>
            <td>2x2x2</td>
          </tr>
          <tr>
            <td>Item Weight</td>
            <td>2kg</td>
          </tr>
          <tr>
            <td>Manufacturer</td>
            <td>Snpur Tech</td>
          </tr>
          <tr>
            <td>ASIN</td>
            <td>B0291238ds</td>
          </tr>
          <tr>
            <td>Customer Review</td>
            <td>5</td>
          </tr>
        </div>
      </div>
      <div className="col-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        odit laborum nesciunt animi. Ullam suscipit saepe alias iure in voluptas
        voluptatem, temporibus beatae nemo quod nihil itaque ex laborum
        praesentium?
      </div>
      {/* </div> */}
    </div>
  );
}

export default InformationTable;
