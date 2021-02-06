import React from "react";
import Search from "./Search.js";
import Current from "./Current.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div
          className="weather-app"
          id="main"
          style={{
            backgroundImage: `url("./images/broken-clouds.gif")`,
          }}
        >
          <Search />
          <Current />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
