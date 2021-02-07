import React from "react";
import "./Info.css";

export default function Info(props) {
    return (
        <div className="Info">
            <div className="row">
                <span>{props.desc}</span>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <span className="Info-emoji">🌧️</span>
                </div>
                <div className="col-md-2 my-auto">
                    <span className="Info-degrees">{props.temp}°C|F</span>
                </div>
                <div className="col-md-7 my-auto Info-values">
                    <p>Precipitation: {props.precipitation}%</p>
                    <p>Humidity: {props.humidity}%</p>
                    <p>Wind Speed: {props.windSpeed} Km/h</p>
                </div>
            </div>
        </div>
    );
}