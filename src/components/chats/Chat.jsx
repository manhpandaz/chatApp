import React from "react";
import Camera from "../../assets/images/cam.png";
import Add from "../../assets/images/add.png";
import More from "../../assets/images/more.png";

import "../styles/ComponentsStyle.scss";
import Messages from "../messages/Messages";
import Input from "../input/Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>TranVanManh</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
