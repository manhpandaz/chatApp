import React from "react";
import "../styles/ComponentsStyle.scss";
import Add from "../../assets/images/add.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Chat App</h1>
      <div className="info">
        <div className="user">
          <img
            src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>TranVanManh</span>
        </div>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
