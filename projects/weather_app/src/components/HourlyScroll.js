import React from "react";
import "../style.css";
import { withWeather } from "../context/WeatherProvider";
import icons from "../shared/icons.js";

function HourlyScroll(props) {
  if (props.hourly) {
    return (
      <div className="display-container scroll">
        {props.hourly.data.map(h => (
          <div className="hourly-data">
            <span>
              {icons[h.icon] ? <img src={icons[h.icon]} alt=""/> : h.icon}
            </span>
            <span>{props.convertTime(h.time, "M/D HH:MM")} </span>
            <span>{Math.round(h.temperature)}℉ </span>
            <hr />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="display-container">
      <h3>no hourly data to display.</h3>
    </div>
  );
}
export default withWeather(HourlyScroll);
