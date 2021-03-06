import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Manage-Inventory</Link>
        <button className="sign-out-Btn" onClick={() => setLogedInUser({})}>
          Sign Out
        </button>
      </nav>
    </div>
  );
};

export default Header;
