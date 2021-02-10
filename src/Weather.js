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
    const[city, setCity] = useState("");
    const[data, setData] = useState({name: '', main: { temp: 0}});
    const[formClass, setFormClass] = useState("Weather-form");
    const[forecastData, setForecastData] = useState("");

    function updateCity(event) {
        setCity(event.target.value);
    }

    function search (event) {
        event.preventDefault();
        let url = "";
        let forecastUrl = "";

        if(event.currentTarget.buttonId === 'search') {
            url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cde0d1f3fb07f748e651759822edfb07&units=metric`;
            forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cde0d1f3fb07f748e651759822edfb07&units=metric`;
            getWeather(url, forecastUrl);
        }
        else {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
    
                    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cde0d1f3fb07f748e651759822edfb07&units=metric`;
                    forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=cde0d1f3fb07f748e651759822edfb07&units=metric`;
                    getWeather(url, forecastUrl);
                });
              } else {
                alert('Geolocation is disabled.');
              }
        }
    }

    function getWeather(url, forecastUrl) {
        axios.get(url)
        .then(result => {
            if(result !== undefined && result.data !== undefined) {
                setData(result.data);
                setFormClass("Weather-form Weather-max");
            }
            else {
                alert(`There is no weather info available for ${city}.`);
            }
        }).catch(error => {
            console.log(error);
            alert('There was an error getting the weather info!');
        });

        axios.get(forecastUrl)
        .then(result => {
            if(result !== undefined && result.data !== undefined) {
                setForecastData(result.data);
            }
            else {
                alert(`There is no forecast info available for ${city}.`);
                setForecastData(null);
            }
        })
        .catch(error => {
            console.log(error);
            alert('There was an error getting the forecast info!');
            setForecastData(null);
        });
    }

    return (
        <div className="Weather">
            <div className="row">
                <form onSubmit={search} ref={form} className={formClass}>
                    <div className="row">
                        <div className="col-10 Weather-search">
                            <input type="Search" placeholder="Enter a city..." className="form-control" onChange={updateCity} />
                        </div>
                        <div className="col-1">
                            <button id='searchButton' type="Submit" className="btn Weather-btn-search" value="Search" onClick={e => form.current.buttonId='search'}>
                                <SearchIcon />
                            </button>    
                        </div>
                        <div className="col-1">
                            <button id='locationButton' type="Submit" className="btn Weather-btn-location" value="Location" onClick={e => form.current.buttonId='geo'}>
                                <LocationOnIcon />
                            </button>    
                        </div>
                    </div>
                    <div className="row Weather-location">
                        <Location city={data.name} />
                    </div>
                    <div className="row Weather-info">
                        <Info data={data} />
                    </div>
                    <div className="row Weather-forecast">
                        <Forecast data={forecastData} />
                    </div>
                </form>
            </div>
        </div>
    );
}