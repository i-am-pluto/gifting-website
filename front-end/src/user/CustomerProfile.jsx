import React, { useState } from "react";
import "./ArtistProfile.css";
import EditGeneral from "./EditGeneral";
import { EditProfile } from "./EditProfile";
const CustomerProfile = () => {
  let profile_user = {
    name: { f_name: "L", l_name: "R" },
    bio: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam illum perspiciatis nemo, eius dignissimos adipisci animi quos quisquam esse? Suscipit voluptas dolores corrupti blanditiis maxime ratione nemo alias consequuntur.",
    followers: 321241231,
    socials: {
      facebook: "https://www.fb.com",
      instagram: "https://www.ig.com",
      linkedin: "https://www.linkedin.com",
    },
    email: "vishu.dabas201@gmail.com",
    phonenumber: 9212201511,
    // cover: "https://wallpaperaccess.com/full/5721388.jpg",
    // pfp: "https://i.pinimg.com/originals/63/a8/45/63a845bfa536ec51341e74691b4d5796.png",
  };

  let [active, setActive] = useState(["active", "", ""]);
  let [active_show, setActive_show] = useState(["active show", "", ""]);

  return (
    <div style={{ marginTop: "60px" }}>
      {/* profile picture on top and cover and artist name and bio  */}
      <div className="cover-image">
        <img
          src={profile_user.cover}
          alt=""
          srcset=""
          className="cover-image-pic"
        />
      </div>
      <div className="profile-pic">
        <img
          src={profile_user.pfp}
          alt=""
          srcset=""
          className="profile-pic-image"
        />
      </div>
      <div className="container">
        <center>
          <h2>
            <b>{profile_user.name.f_name + " " + profile_user.name.l_name}</b>
          </h2>
        </center>
        <hr />
      </div>
      <div className="container py-5">
        <div className="p-5 bg-white rounded shadow mb-5">
          {/* <!-- Rounded tabs --> */}
          {/* // each in diff. bootstrap tabs  */}

          <ul className="nav nav-tabs nav-pills  text-center bg-light border-0 rounded-nav d-flex justify-content-around">
            <li className="nav-item">
              <button
                className={`nav-link border-0 text-uppercase font-weight-bold ${active[0]}`}
                onClick={() => {
                  setActive(["active", "", ""]);
                  setActive_show(["active show", "", ""]);
                }}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link border-0 text-uppercase font-weight-bold ${active[1]}`}
                onClick={() => {
                  setActive(["", "active", ""]);
                  setActive_show(["", "active show", ""]);
                }}
              >
                General Information
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link border-0 text-uppercase font-weight-bold ${active[2]}`}
                onClick={() => {
                  setActive(["", "", "active"]);
                  setActive_show(["", "", "active show"]);
                }}
              >
                Orders
              </button>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className={`tab-pane fade px-4 py-5 ${active_show[0]}`}>
              <EditProfile profile_user={profile_user} />
              {/* edit profile image */}
              {/* edit name */}
            </div>
            <div className={`tab-pane fade px-4 py-5 ${active_show[1]}`}>
              {/* edit payment details */}
              <EditGeneral profile_user={profile_user} />
              {/* edit address */}
            </div>
            <div className={`tab-pane fade px-4 py-5 ${active_show[2]}`}>
              banana
              {/* a list of all orders. containst order id and only the name of the product. add a link to '/order/:orderID' to the order id which redirects to the order page */}
            </div>
          </div>
          {/* <!-- End rounded tabs --> */}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
