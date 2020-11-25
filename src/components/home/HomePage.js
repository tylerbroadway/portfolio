import React from "react";
import NavBar from "../Nav";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <div
      className="home"
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <NavBar />
      <Banner />
    </div>
  );
};

export default HomePage;
