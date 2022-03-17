import React from "react";
import { useState } from "react";
import ProductsOfArtist from "./ProductsOfArtist";
import "./Profile.css";
function Profile() {
  let [buttonText, setButtonText] = useState("Followed");
  function change(e) {
    if (buttonText === "Followed") setButtonText("Unfollow");
  }
  function change2(e) {
    if (buttonText === "Unfollow") setButtonText("Followed");
  }
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="cover-image">
        <img
          src="https://hdwallsource.com/img/2021/8/lana-rhoades-sexy-wallpaper-73804-76479-hd-wallpapers.jpg"
          alt=""
          srcset=""
          className="cover-image-pic"
        />
      </div>
      <div className="profile-pic">
        <img
          src="https://i.pinimg.com/originals/63/a8/45/63a845bfa536ec51341e74691b4d5796.png"
          alt=""
          srcset=""
          className="profile-pic-image"
        />
      </div>
      <div className="container">
        <center>
          <h2>
            <b>Lana Rhodes</b>
          </h2>
          <button
            className="mb-3 btn btn-outline-dark"
            onMouseOver={change}
            onMouseLeave={change2}
          >
            {buttonText}
          </button>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            accusantium
          </h6>
        </center>
        <hr />
        <div>
          <div className="row text-center m-t-20 d-flex justify-content-center">
            <div className="col-lg-4 col-md-4">
              <h3 className="m-b-0 font-light">434K</h3>
              <small>Followers</small>
            </div>
          </div>
          <div className="socials d-flex justify-content-evenly">
            <i class="btn fab fa-facebook-f"></i>
            <i class="btn fab fa-google"></i>
            <i class="btn fab fa-instagram"></i>
            <i class="btn fab fa-linkedin-in"></i>
            <i class="btn fab fa-pinterest"></i>
            <i class="btn fab fa-whatsapp"></i>
          </div>
        </div>
        <hr />
      </div>

      {/* posts */}

      <ProductsOfArtist />
    </div>
    //{" "}
  );
}

export default Profile;
