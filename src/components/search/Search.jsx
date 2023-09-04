import React from "react";
import "../styles/ComponentsStyle.scss";
function Search(props) {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>username</span>
      </div>
    </div>
  );
}

export default Search;
