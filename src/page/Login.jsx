import React from "react";
import "./PageStyle.scss";
import Addavatar from "../assets/images/addAvatar.png";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1 className="logo">Chat App</h1>
        {/* <NavLink to={"/login"}>Login</NavLink> */}
        <span className="title">Login</span>
        <form action="">
          <input type="email" name="email" placeholder="Email" id="" />
          <input type="password" name="password" placeholder="Password" id="" />
          <button>Login</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
