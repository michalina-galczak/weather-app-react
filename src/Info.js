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
                <div className="col-md-3 my-auto">
                    <span className="Info-degrees">{props.temp}°C|F</span>
                    <p className="Info-maxmin">H: {props.max}°C L: {props.min}°C</p>
                </div>
                <div className="col-md-6 my-auto Info-values">
                    <p>Real Feel: <b>{props.realFeel}°C</b></p>
                    <p>Precipitation: <b>{props.precipitation}%</b></p>
                    <p>Humidity: <b>{props.humidity}%</b></p>
                    <p>Wind Speed: <b>{props.windSpeed} Km/h</b></p>
                </div>
            </div>
        </div>
    );
}