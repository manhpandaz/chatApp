import React from "react";
import "../styles/ComponentsStyle.scss";
function Chats(props) {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userInfo">
          <h3 className="">Name</h3>
          <p>Hello Friend</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userInfo">
          <h3 className="">Name</h3>
          <p>Hello Friend</p>
        </div>
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userInfo">
          <h3 className="">Name</h3>
          <p>Hello Friend</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
