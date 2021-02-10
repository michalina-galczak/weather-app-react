import React from "react";

export default function Temperature(props) {
    if(props.unit === "celsius") {
        return (
            <span>{Math.round(props.temp)}°C</span>
        );
    }
    else{
        return (
            <span>{Math.round(props.temp * 9/5 + 32)}°F</span>
        );
    }
}