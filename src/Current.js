import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="current">
      <div className="row">
        <div className="col-6">
          <div className="overview">
            <h1 id="city">Manchester</h1>
            <ul>
              <li id="description">Broken clouds</li>
            </ul>
          </div>
        </div>
        <div className="col-6 text-right">
          <span id="date"></span>12:00,<span id="todayDate"> 17th January</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              alt=""
              id="icon"
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature">12 </strong>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |{" "}
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 text-right" id="conditions">
          <li>
            Humidity: <span id="humidity">60</span>%
          </li>
          <li>
            Wind: <span id="wind">5</span> km/h
          </li>
        </div>
      </div>
      <hr />
    </div>
  );
}
