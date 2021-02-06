import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row weather-forecast" id="forecast">
      <div className="card">
        <div className="card-body">
          <h3>06:00</h3>
          <img src="http://openweathermap.org/img/wn/50n@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3>09:00</h3>
          <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3>12:00</h3>
          <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3>15:00</h3>
          <img src="http://openweathermap.org/img/wn/50n@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3>18:00</h3>
          <img src="http://openweathermap.org/img/wn/50n@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3>21:00</h3>
          <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="" />
          <div className="weather-forecast-temperature">
            <span className="max">5°</span> <span className="min">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
