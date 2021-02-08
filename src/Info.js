import React from "react";
import "./Info.css";

export default function Info(p) {
    if(p.data !== undefined && p.data.weather !== undefined) {
        let iconPath = "http://openweathermap.org/img/wn/" + p.data.weather[0].icon + "@2x.png";
        let temp = Math.round(p.data.main.temp);
        let max = Math.round(p.data.main.temp_max);
        let min = Math.round(p.data.main.temp_min);
        return (
            <div className="Info">
                <div className="row">
                    <span>{p.data.weather[0].main}</span>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={iconPath} alt='' className="Info-emoji" />
                    </div>
                    <div className="col-md-3 my-auto">
                        <span className="Info-degrees">{temp}°C</span>
                        <p className="Info-maxmin">H: {max}°C L: {min}°C</p>
                    </div>
                    <div className="col-md-6 my-auto Info-values">
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