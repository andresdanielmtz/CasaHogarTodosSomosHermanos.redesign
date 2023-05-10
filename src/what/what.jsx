import "./what.css";
import whatImg from "../assets/logo/portada_fb.jpg"

function WhatAreWeMrWhite() {
  return (
    <>
      <div className="what">
        <h3 className="what-title">¿Qué somos?</h3>
        <p className = "what-text">
        Somos un centro de protección a menores enfocado en ayudar a jóvenes desde los 13 a los 17 años de edad.
        </p>
        <img src= {whatImg} alt="" className="what-img" />
      </div>
    </>
  );
}

export default WhatAreWeMrWhite;
