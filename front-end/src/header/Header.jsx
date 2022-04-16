import React from "react";
import logo from "../assets/img/WorldOnpencil.png";

import "./Header.css";
import us from "../assets/img/countries/2560px-Flag_of_the_United_States.svg.png";
import ind from "../assets/img/countries/1350px-Flag_of_India.svg.png";
import SearchBar from "./SearchBar";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <div className="navbar navbar-dark bg-dark container-fluid  fixed-top">
      {/* // header logo */}
      <div className="header__option header_ob">
        <a className="brand" style={{ textAlign: "center" }} href="/">
          World On Pencil
        </a>
      </div>
      <div className="flexbox">
        <div className="flexbox_item"></div>
      </div>
      <SearchBar />
      <div className="flexbox">
        <div className="flexbox_item"></div>
      </div>
      <div className="header__nav">
        <div className="header__option header_ob">
          <span className="header__optionLineOne">Purchase</span>
          <span className="header__optionLineTwo">History</span>
        </div>

        <div className="header__option header_ob">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">WishList</span>
        </div>
        {/* // sign in */}
        <div
          className="header__option header_ob"
          style={{ backgroundColor: "transparent" }}
        >
          <span className="header__optionLineOne">Welcome</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        {/* // cart */}
        <div className="header__optionBasket header_ob">
          <span className="header__optionLineOne">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </span>
          <span
            className="header__optionLineTwo header__basketCount"
            id="shopping-cart-count-main"
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
