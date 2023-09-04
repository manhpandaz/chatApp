import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chats/Chat";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
