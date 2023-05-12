import "./what.css";
import React, { useRef, useEffect } from "react";
import whatImg from "../assets/logo/portada_fb.jpg";
import locationOverview from "../assets/outside.png";
import "ol/ol.css";

function WhatAreWeMrWhite() {
  

  return (
    <>
      <div className="what">
        <h3 className="what-title">¿Quiénes somos?</h3>
        <p className="what-text">
          Basados en Hermosillo, Sonora. Somos un centro de protección a menores
          enfocado en ayudar a jóvenes desde los 13 a los 17 años de edad.
        </p>
        
        <img src={whatImg} alt="" className="what-img" />
        <img src = {locationOverview} alt = "" className = "what-img"/>
      </div>
    </>
  );
}

export default WhatAreWeMrWhite;
