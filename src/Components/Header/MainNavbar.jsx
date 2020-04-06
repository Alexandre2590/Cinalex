import React from "react";
// import { Link, NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";

const MainNavbar = () => {
  return (
    <div>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <img className="is-3by1" src={Logo} alt="logo" />
          </div>

          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">Acceuil</div>

            <div className="navbar-item">Documentation</div>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Plus</div>

              <div className="navbar-dropdown">
                <div className="navbar-item">A propos de nous</div>
                <div className="navbar-item">Un truc a rajouter ???</div>
                <hr className="navbar-divider" />
                <div className="navbar-item">Cindy fait pas la maline</div>
              </div>
            </div>
          </div>

          {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-primary">
                  <strong>Sign up</strong>
                </div>
                <div className="button is-light">Log in</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
