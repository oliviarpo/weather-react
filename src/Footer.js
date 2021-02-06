import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
        <a
          href="https://github.com/oliviarpo/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logo"
            id="github"
            src="./images/GitHub-Mark-32px.png"
            alt=""
          />
        </a>

        <a
          href="http://www.slimjimstudios.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="logo"
            id="slimjim"
            src="./images/slimjimlogo.png"
            alt=""
          />
        </a>
      </small>
    </div>
  );
}
