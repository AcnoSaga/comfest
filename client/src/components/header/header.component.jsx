import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.component.styles.css";

function Header() {
  return (
    <div id="header">
      <Link to="/" className="logo">
        <img src={Logo} />
      </Link>

      <div className="titles">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>

          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/jobs">Your Jobs</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
