import React from "react";
import "./Location.css";

export default function Location(props) {
    function getDayAndTime() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date();
        return `${days[d.getDay()]}, ${d.toLocaleTimeString()}`;
    }

    if(props.city !== "") {
        return (
            <div className="Location">
                <div className="row">
                    <h1>{props.city}</h1>
                </div>
                <div className="row">
                    <span>{getDayAndTime()}</span>
                </div>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
}