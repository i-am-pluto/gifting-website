import React, { useState } from "react";

const EditGeneral = ({ profile_user }) => {
  const [cardHolder, setCardHolder] = useState();

  const [cardNumber, setCardNumber] = useState();
  const [expiry, setExpiry] = useState();
  let address = {};
  let artist = false;
  let customer = false;
  const handleSubmit = async (e) => {};

  return (
    <div>
      <div class="container bootstrap snippets bootdey">
        <h1 class="text-primary">General Information</h1>
        <p className="alert">
          *The Information below can be updated at the time of order
        </p>
        <hr />
        <div class="row">
          <div class="col">
            <h3>Payment Information</h3>
            <form class="form-horizontal" onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="col-lg-5 control-label">Card Number:</label>
                <div class="col-lg-8">
                  <input
                    type="tel"
                    inputmode="numeric"
                    autocomplete="cc-number"
                    maxlength="19"
                    class="form-control"
                    value={cardNumber}
                    placeholder="1234 5678 9123 4567"
                    onChange={(e) => {
                      if (isNaN(e.target.value) || e.target.value.length > 16) {
                        e.target.style.borderColor = "red";
                        return;
                      }
                      e.target.style.borderColor = "green";
                      setCardNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-5 control-label">Card Holder:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={cardHolder}
                    placeholder="lana rhodes"
                    onChange={(e) => {
                      setCardHolder(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-5 control-label">Expiry Date:</label>
                <div class="col-lg-8">
                  <input
                    class="form-control"
                    type="text"
                    value={expiry}
                    onChange={(e) => {
                      if (!isNaN(e.target.value) || e.target.value.length > 4) {
                        e.target.style.borderColor = "red";
                        return;
                      }
                      e.target.style.borderColor = "green";
                      setExpiry(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button className="btn btn-primary ml-3">
                <i className="fas fa-save"></i>
              </button>
            </form>
          </div>

          <div class="col personal-info">
            <h3>Address</h3>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="fline"
                  id="fline"
                  placeholder="First Line"
                  className="form-control"
                  onChange={(e) => {
                    address.fline = e.target.value;
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="sline"
                  id="sline"
                  placeholder="Second Line"
                  className="form-control"
                  onChange={(e) => {
                    address.sline = e.target.value;
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="form-control"
                  onChange={(e) => {
                    address.city = e.target.value;
                  }}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  className="form-control"
                  onChange={(e) => {
                    address.state = e.target.value;
                  }}
                />
              </div>
            </div>
            <div className="mb-2">
              <select
                className="form-select bg-dark text-white"
                onChange={(e) => {
                  address.country = e.target.value;
                }}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="zip"
                  onChange={(e) => {
                    const n = e.target.value;
                    if (isNaN(n) || n.length != 6) {
                      e.target.style.borderColor = "red";
                      return;
                    }
                    e.target.style.borderColor = "green";
                    address.pincode = Number(n);
                  }}
                ></input>
              </div>

              <div className=" col">
                <select
                  name="tag"
                  id=""
                  className="form-select bg-dark text-white"
                  onChange={(e) => {
                    address.tag = e.target.value;
                  }}
                >
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <br />

            <button className="btn btn-primary">
              <i className="fas fa-save"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default EditGeneral;
