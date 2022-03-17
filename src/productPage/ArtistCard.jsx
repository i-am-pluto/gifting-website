import React from "react";
import "./ArtistCard.css";

function ArtistCard() {
  let artist;

  return (
    <div>
      <div className="container padding">
        <div className="row">
          <div className="col">
            {/* <!-- Column --> */}
            <div className="card">
              {" "}
              <img
                className="card-img-top"
                src="https://i.imgur.com/K7A78We.jpg"
                alt="Card image cap"
              />
              <div className="card-body little-profile text-center">
                <div className="pro-img">
                  <img
                    className="link-profile"
                    src="https://i.imgur.com/8RKXAIV.jpg"
                    alt="user"
                  />
                </div>
                <h3 className="m-b-0 btn link-profile">Brad Macullam</h3>
                <p>Web Designer &amp; Developer</p>{" "}
                <a
                  href="javascript:void(0)"
                  className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded"
                  data-abc="true"
                >
                  Follow
                </a>
                <div className="row text-center m-t-20 d-flex justify-content-center">
                  <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">434K</h3>
                    <small>Followers</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
