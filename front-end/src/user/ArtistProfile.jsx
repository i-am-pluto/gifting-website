import React from "react";
import "./ArtistProfile.css";

function ArtistProfile() {
  let profile_user = {
    name: "Lana Rhodes",
    bio: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam illum perspiciatis nemo, eius dignissimos adipisci animi quos quisquam esse? Suscipit voluptas dolores corrupti blanditiis maxime ratione nemo alias consequuntur.",
    followers: 321241231,
    socials: {
      facebook: "https://www.fb.com",
      instagram: "https://www.ig.com",
      linkedin: "https://www.linkedin.com",
    },
    cover:
      "https://hdwallsource.com/img/2021/8/lana-rhoades-sexy-wallpaper-73804-76479-hd-wallpapers.jpg",
    pfp: "https://i.pinimg.com/originals/63/a8/45/63a845bfa536ec51341e74691b4d5796.png",
  };

  return (
    <div style={{ marginTop: "60px" }}>
      {/* profile picture on top and cover and artist name and bio  */}
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
            <b>{profile_user.name}</b>
          </h2>
          <h6>{profile_user.bio}</h6>
        </center>
        <hr />
      </div>
      <div class="container py-5">
        <div class="p-5 bg-white rounded shadow mb-5">
          {/* <!-- Rounded tabs --> */}
          {/* // each in diff. bootstrap tabs  */}

          <ul
            id="myTab"
            role="tablist"
            class="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-light border-0 rounded-nav"
          >
            <li class="nav-item flex-sm-fill">
              <a
                id="info-tab"
                data-toggle="tab"
                href="#info"
                role="tab"
                aria-controls="info"
                aria-selected="true"
                class="nav-link border-0 text-uppercase font-weight-bold active"
              >
                Artist Profile
              </a>
            </li>
            <li class="nav-item flex-sm-fill">
              <a
                id="general-tab"
                data-toggle="tab"
                href="#general"
                role="tab"
                aria-controls="general"
                aria-selected="false"
                class="nav-link border-0 text-uppercase font-weight-bold"
              >
                General Information
              </a>
            </li>
            <li class="nav-item flex-sm-fill">
              <a
                id="addproduct-tab"
                data-toggle="tab"
                href="#addproduct"
                role="tab"
                aria-controls="addproduct"
                aria-selected="false"
                class="nav-link border-0 text-uppercase font-weight-bold"
              >
                Add A Product
              </a>
            </li>
            <li class="nav-item flex-sm-fill">
              <a
                id="orders-tab"
                data-toggle="tab"
                href="#orders"
                role="tab"
                aria-controls="orders"
                aria-selected="false"
                class="nav-link border-0 text-uppercase font-weight-bold"
              >
                Orders
              </a>
            </li>
          </ul>
          <div id="myTabContent" class="tab-content">
            <div
              id="info"
              role="tabpanel"
              aria-labelledby="info-tab"
              class="tab-pane fade px-4 py-5 show active"
            >
              {/* <!--  --> */}

              {/* edit profile image */}
              {/* edit cover image */}
              {/* edit artist name */}
              {/* edit bio */}
              {/* edit socials -> options to add socials from a list like fb google instagram */}
            </div>
            <div
              id="general"
              role="tabpanel"
              aria-labelledby="general-tab"
              class="tab-pane fade px-4 py-5"
            >
              {/* edit payment details */}
              {/* edit address */}
            </div>
            <div
              id="addproduct"
              role="tabpanel"
              aria-labelledby="addproduct-tab"
              class="tab-pane fade px-4 py-5"
            >
              {/* a form to add the product check the backend for details. it should take as many images as the artist wants to upload */}
            </div>
            <div
              id="orders"
              role="tabpanel"
              aria-labelledby="orders-tab"
              class="tab-pane fade px-4 py-5"
            >
              {/* a list of all orders. containst order id and only the name of the product. add a link to '/order/:orderID' to the order id which redirects to the order page */}
            </div>
          </div>
          {/* <!-- End rounded tabs --> */}
        </div>
      </div>
    </div>
  );
}

export default ArtistProfile;
