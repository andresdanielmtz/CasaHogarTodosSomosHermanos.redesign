import React from "react";
import "./home.css";
import "animate.css";

function Home() {
  return (
    <>
      <div className="home">
        <img
          class="animate__animated animate__backInDown" id = "logo"
          src="../src/assets/logo/logo.svg"
        />
      </div>
    </>
  );
}

export default Home;
