import React, { useRef, useState } from "react";
import "./Weather.css";
import Location from "./Location.js";
import Info from "./Info.js";
import Forecast from "./Forecast.js";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import axios from 'axios';

export default function Weather() {
    const form = useRef();
    let[city, setCity] = useState("");

    function search(event) {
        event.preventDefault();
        getWeather();
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    function getWeather() {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de721be4f431ff99a9769e3b29d705a6&units=metric`;
        axios.get(url).
        then(result => {
            debugger;
        });
    }

    return (
        <div className="Weather">
            <div className="row">
                <form onSubmit={search} ref={form}>
                    <div className="row">
                        <div className="col-10 Weather-search">
                            <input type="Search" placeholder="Enter a city..." className="form-control" onChange={updateCity} />
                        </div>
                        <div className="col-1">
                            <button id='searchButton' type="Submit" className="btn Weather-btn-search" value="Search" onClick={e => form.current.buttonId=e.target.id}>
                                <SearchIcon />
                            </button>    
                        </div>
                        <div className="col-1">
                            <button id='locationButton' type="Submit" className="btn Weather-btn-location" value="Location" onClick={e => form.current.buttonId=e.target.id}>
                                <LocationOnIcon />
                            </button>    
                        </div>
                    </div>
                    <div className="row Weather-location">
                        <Location city="Lisbon" />
                    </div>
                    <div className="row Weather-info">
                        <Info temp="12" max="14" min="10" realFeel="11" desc="Rainy" precipitation="89" humidity="82" windSpeed="40" />
                    </div>
                    <div className="row Weather-forecast">
                        <Forecast />
                    </div>
                </form>
            </div>
        </div>
    );
}