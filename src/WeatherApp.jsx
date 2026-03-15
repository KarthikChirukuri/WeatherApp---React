import React, { useState } from 'react';
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        humidity: 47,
        feels_like: 24.84,
        temp: 25.85,
        tempMin: 25.08,
        tempMax: 25.08,
        weather: "haze"
    });

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <React.Fragment>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox weatherInfo={weatherInfo}></InfoBox>
        </React.Fragment>
    );
}