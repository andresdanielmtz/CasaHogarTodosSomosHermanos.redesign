import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v16.0"
      nonce="N5dwPeat"
    ></script>
  </div>
);
