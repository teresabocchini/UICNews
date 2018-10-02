import React from "react";
import logo from "../resources/logo.png";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-3 py-2">
      <div className="container">
        <img src={logo} className="rounded float-left" alt="UIC" />
        <h1 className="navbar-text text-white">{title}</h1>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
