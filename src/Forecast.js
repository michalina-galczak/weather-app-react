import React from "react";
import './Forecast.css';

export default function Forecast(props) {
    function getForecastDay(numDays) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        d.setDate(d.getDate() + numDays);

        return days[d.getDay()];
    }

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col-md-3 my-auto">
                    <p><b>{getForecastDay(1)}</b></p>
                    <p className="Forecast-icon">🌧️</p>
                    <p>11ºC</p>
                </div>
                <div className="col-md-3 my-auto">
                    <p><b>{getForecastDay(2)}</b></p>
                    <p className="Forecast-icon">🌧️</p>
                    <p>13ºC</p>
                </div>
                <div className="col-md-3 my-auto">
                    <p><b>{getForecastDay(3)}</b></p>
                    <p className="Forecast-icon">☁️</p>
                    <p>14ºC</p>
                </div>
                <div className="col-md-3 my-auto">
                    <p><b>{getForecastDay(4)}</b></p>
                    <p className="Forecast-icon">🌥️</p>
                    <p>14ºC</p>
                </div>
            </div>
        </div>
    );
}