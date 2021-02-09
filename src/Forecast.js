import React from "react";
import './Forecast.css';
import ForecastDays from "./ForecastDays.js";

export default function Forecast(props) {

    if(props.data !== undefined) {
        return (
            <div className="Forecast">
                <ForecastDays data={props.data} />
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}