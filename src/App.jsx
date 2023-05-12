import { useState } from "react";
import Home from "./home/home";
import WhatAreWeMrWhite from "./what/what";
import SocialMedia from "./socialmedia/socialmedia";
import HowToHelp from "./HowToHelp/HowToHelp";
import "./App.css";

function App() {
  return (
    <>
      <Home /> 
      <WhatAreWeMrWhite />
      <SocialMedia />
      <HowToHelp/>
    </>
  );
}

export default App;
