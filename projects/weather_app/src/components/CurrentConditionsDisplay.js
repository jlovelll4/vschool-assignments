// const Skycons = require('react-skycons');
import React from "react";
import Skycons from "react-skycons";

import { withWeather } from "../context/WeatherProvider";
import "../style.css";
import icons from "../shared/icons";

class CurrentConditionsDisplay extends React.Component {

  render() {
    const icon = this.props.currently.icon.replace(/-/g, "_").toUpperCase();

    if (this.props.currently) {
      return (
        <div className="display-container scroll">
          <h2>Current Conditions</h2>
            {this.props.convertTime(this.props.currently.time, "HH:MM")}
            <hr/>
                <Skycons
                    style={{"height": "4em", "width": "6em"}}
                    color="white"
                    icon={icon}
                    autoplay={true}
                />
            {this.props.currently.summary}
            <hr/>
            <u>Temp</u>
            <span>
                {Math.round(this.props.currently.temperature)}℉ |
                {Math.round(this.props.currently.apparentTemperature)}℉ (Feels Like)
            </span>
            <hr/>
            Humidity: {this.props.currently.humidity * 100}%
            <hr/>
            Precip: {this.props.currently.precipProbability * 100}%
           <hr/>
            <u>Wind</u>
            <span>
                {this.props.currently.windSpeed} mph |
                {this.props.convertBearing(this.props.currently.windBearing)} |
                {this.props.currently.windGust} mph (gust)
            </span>
            <hr/>
            <span>
            Dew Pt: {Math.round(this.props.currently.dewPoint)}°
            </span>
            <hr/>
            Pressure: {Math.round(this.props.currently.pressure)}mb
            <hr/>
            UV Index: {this.props.currently.uvIndex}
        </div>
      );
    } else {
      return (
        <div>
          <h1>No data to display.</h1>
        </div>
      );
    }
  }
}
export default withWeather(CurrentConditionsDisplay);
