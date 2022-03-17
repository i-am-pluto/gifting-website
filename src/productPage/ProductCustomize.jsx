import React from "react";

function ProductCustomize() {
  return (
    <div className="container">
      <div
        className="card-footer py-3 border-0"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="d-flex flex-start w-100">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
            alt="avatar"
            width="40"
            height="40"
          />
          <div className="form-outline w-100">
            <textarea
              className="form-control"
              id="textAreaExample"
              rows="4"
              style={{ background: "#fff" }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-2 pt-1 d-flex justify-content-end">
        <button type="button" className="btn btn-primary btn-sm mr-2">
          Attach Message
        </button>
      </div>
    </div>
  );
}

export default ProductCustomize;
