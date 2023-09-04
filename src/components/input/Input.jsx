import React from "react";
import Attach from "../../assets/images/attach.png";
import Img from "../../assets/images/img.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Enter your messages" />
      <div className="send">
        <img src={Attach} className="attachImg" alt="" />
        <input type="file" name="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} className="fileImg" alt="" />
        </label>
        <button type="submit">SEND</button>
      </div>
    </div>
  );
};

export default Input;
