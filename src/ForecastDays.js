import React from "react";
import "./ForecastDays.css";
import Temperature from "./Temperature.js";

export default function ForecastDays(props) {
    const days = props.data;
    const divs = [];

    function getTimezoneDate(timestamp, timezone) {
      let timeNow = new Date(timestamp);
      let offset = timeNow.getTimezoneOffset() * 60000;
      let utc = timestamp + offset;
      let cityTime = utc + (1000 * timezone);
    
      return new Date(cityTime);
    }
    
    function formatHours(timestamp, timezone) {
        let cityDate = getTimezoneDate(timestamp, timezone);
        let hours = cityDate.getHours();
        if (hours < 10) {
          hours = `0${hours}`;
        }
        
        let minutes = cityDate.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }

        return `${hours}:${minutes}`
      }

      if(days !== undefined && days.list !== undefined) {
        for(const [index, value] of days.list.entries()) {
          let temp = Math.round(value.main.temp);
          let iconPath = "http://openweathermap.org/img/wn/" + value.weather[0].icon + "@2x.png";
          divs.push(
            <div key={index} className="col-md-2 my-auto">
              <p><b>{formatHours(value.dt * 1000, days.city.timezone)}</b></p>
              <img src={iconPath} alt='' className="ForecastDays-icon" />
              <p><Temperature temp={temp} unit={props.unit} /></p>
            </div>);

          if(index === 5) {
            break;
          }
        }
    }

    return (
        <div className="row">
            {divs}
        </div>
    );
}