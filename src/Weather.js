import React from "react";
import "./Weather.css";
import Location from "./Location.js";
import Info from "./Info.js";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="row">
                <form>
                    <div className="row">
                        <div className="col-8">
                            <input type="Search" placeholder="Enter a city..." className="form-control" />
                        </div>
                        <div className="col-2">
                            <input type="Submit" className="btn Weather-btn-search" value="Search" />
                        </div>
                        <div className="col-2">
                            <input type="Submit" className="btn Weather-btn-location" value="Location" />
                        </div>
                    </div>
                    <div className="row Weather-location">
                        <Location city="Lisbon" />
                    </div>
                    <div className="row Weather-info">
                        <Info temp="12" desc="Rainy" precipitation="89" humidity="82" windSpeed="40" />
                    </div>
                </form>
            </div>
        </div>
    );
}