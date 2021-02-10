import React, { useState } from "react";
import "./Info.css";

export default function Info(p) {
    const[temp, setTemp] = useState("");

    if(p.data !== undefined && p.data.weather !== undefined) {
        console.log({temp});
        let iconPath = "http://openweathermap.org/img/wn/" + p.data.weather[0].icon + "@2x.png";
        let max = Math.round(p.data.main.temp_max);
        let min = Math.round(p.data.main.temp_min);

        function showCelsius(event) {
            event.preventDefault();
            setTemp(Math.round(p.t));
        }

        function showFahrenheit(event) {
            event.preventDefault();
            setTemp(Math.round(p.t * 9/5+32));
        }

        return (
            <div className="Info">
                <div className="row">
                    <span>{p.data.weather[0].main}</span>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={iconPath} alt='' className="Info-emoji" />
                    </div>
                    <div className="col-md-5 my-auto">
                        <span className="Info-degrees">{temp}<a href="/" onClick={showCelsius}>°C</a>|<a href="/" onClick={showFahrenheit}>°F</a></span>
                        <p className="Info-maxmin">H: {max}°C L: {min}°C</p>
                    </div>
                    <div className="col-md-4 my-auto Info-values">
                        <p>Real Feel: <b>{p.data.main.feels_like}°C</b></p>
                        <p>Pressure: <b>{p.data.main.pressure}%</b></p>
                        <p>Humidity: <b>{p.data.main.humidity}%</b></p>
                        <p>Wind Speed: <b>{p.data.wind.speed} Km/h</b></p>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}