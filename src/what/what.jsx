import "./what.css";
import React, { useRef, useEffect } from "react";
import whatImg from "../assets/logo/portada_fb.jpg";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat, transform} from "ol/proj.js";
import "ol/ol.css";

function WhatAreWeMrWhite() {
  const mapRef = useRef(null);

  /* coords to openlayer */
  const coords = [-110.9514737, 29.0963542]; // real coordinates
  const real = transform(coords, "EPSG:4326", "EPSG:3857");

  console.log(real) 
  useEffect(() => {

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: real,
        zoom: 18,
      }),
    });
  }, []);

  return (
    <>
      <div className="what">
        <h3 className="what-title">¿Quiénes somos?</h3>
        <p className="what-text">
          Basados en Hermosillo, Sonora.  Somos un centro de protección a
          menores enfocado en ayudar a jóvenes desde los 13 a los 17 años de
          edad.
        </p>
        <div style={{ height: "70%", width: "80%"}} id = "location-map" ref={mapRef}></div>
        <i className="what-subtext"> Calle Heriberto Aja 107, Cruz Gálvez, Centro, 83000.</i> 
        <img src={whatImg} alt="" className="what-img" />
      </div>
    </>
  );
}

export default WhatAreWeMrWhite;
