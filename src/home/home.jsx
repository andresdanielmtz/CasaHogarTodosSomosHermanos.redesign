import React from "react";
import "./home.css";
import "animate.css";
import Logo from "../assets/logo/logo.svg"

function Home() {
  return (
    <>
      <div className="home">
        <img
          class="animate__animated animate__backInDown" id = "logo"
          src= {Logo} 
        />
      </div>
    </>
  );
}

export default Home;
