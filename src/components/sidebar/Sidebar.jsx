import React from "react";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Chats from "../chats/Chats";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar></Navbar>
      <Search></Search>
      <Chats />
    </div>
  );
}
