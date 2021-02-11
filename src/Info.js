import React from "react";
import "./Info.css";
import Temperature from "./Temperature.js";
import Icon from "./Icon.js";

export default function Info(p) {
    if(p.data !== undefined && p.data.weather !== undefined) {
        let icon = p.data.weather[0].icon;
        let temp = Math.round(p.data.main.temp);
        let max = Math.round(p.data.main.temp_max);
        let min = Math.round(p.data.main.temp_min);

        return (
            <div className="Info">
                <div className="row">
                    <div className="col-1">
                        <span>{p.data.weather[0].main}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <p className="Info-emoji"><Icon code={icon} size={100} color="#FFFF" animate={true} /></p>
                    </div>
                    <div className="col-md-5 my-auto">
                        <span className="Info-degrees"><Temperature unit={p.unit} temp={temp} /></span>
                        <p className="Info-maxmin">H: <Temperature unit={p.unit} temp={max} /> L: <Temperature unit={p.unit} temp={min} /></p>
                    </div>
                    <div className="col-md-4 my-auto Info-values">
                        <p>Real Feel: <b><Temperature unit={p.unit} temp={p.data.main.feels_like} /></b></p>
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