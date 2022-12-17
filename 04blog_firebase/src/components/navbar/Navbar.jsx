import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        HOME
      </Link>
      <Link to="/createPost">
        <FontAwesomeIcon icon={faFilePen} />
        Create Post
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
