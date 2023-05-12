import "./location.css";
import React, { useRef, useEffect } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { fromLonLat, transform } from "ol/proj.js";
const Location = (props) => {
    const mapRef = useRef(null);

  /* coords from google maps to openlayer */
  const coords = [-110.9514737, 29.0963542]; // real coordinates
  const real = transform(coords, "EPSG:4326", "EPSG:3857");


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

    let division = document.createElement("div");
    division.innerHTML =
      '<img click = {console.log(":)} src="https://cdn.discordapp.com/attachments/1017282108412153866/1106464882297151508/Untitled_40_40_px.png"/>';

    let jsonOverlay = new Overlay({
      position: real,
      positioning: "center-center",
      element: division,
      stopEvent: true,
    });

    map.addOverlay(jsonOverlay);
  }, []);
  return (
    <>
      <div className="location">
        <h3 class = "location-subtitle"> Ubicación </h3>

        <div
          style={{ height: "70%", width: "80%" }}
          id="location-map"
          ref={mapRef}
        ></div>
        <i className="what-subtext">
          {" "}
          Calle Heriberto Aja 107, Cruz Gálvez, Centro, 83000.
        </i>
      </div>
    </>
  );
};

export default Location;
