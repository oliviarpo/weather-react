import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="mb-3">
      <div className="row">
        <div className="col-9">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Type a city..."
              aria-label="Type a city..."
              aria-describedby="basic-addon2"
              id="city-input"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                <i className="fas fa-search-location"></i>
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="current-location"
              >
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
