import React from "react";
// import { Link, NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'


const MainNavbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="https://bulma.io">
            <Link to="/">
             <img className="is-3by1" src={Logo} alt="logo" />
            </Link>
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
            <NavLink className="navbar-item" to="/" exact>Accueil</NavLink>
            <div className="navbar-item">
            <NavLink to="/documentation">Documentation</NavLink>
            </div>

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
        </div>
      </nav>
    </div>
  );
};

export default withRouter(MainNavbar)
