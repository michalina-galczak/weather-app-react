import React from "react";
import "./Weather.css";

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
                </form>
            </div>
        </div>
    );
}