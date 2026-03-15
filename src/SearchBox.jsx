import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({ updateInfo }) => {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "be5d245497a6f896d259061185d5b65f";

    let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        // let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        // let jsonResponse = await response.json();
        // console.log(jsonResponse);
        // let result={
        //     city: city,
        //     temp:jsonResponse.main.temp,
        //     tempMin: jsonResponse.main.temp_min,
        //     tempMax: jsonResponse.main.temp_max,
        //     humidity: jsonResponse.main.humidity,
        //     feelsLike: jsonResponse.main.feels_like,
        //     weather: jsonResponse.weather[0].description
        // }
        // console.log(result);
        // return result;

        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) throw new Error(jsonResponse.message);
            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
        } catch (err) {
            console.error("Error fetching weather:", err);
            return null;
        }

    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        if (info) updateInfo(info);

    }
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city} />
                <br></br><br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </React.Fragment>
    );
}

export default SearchBox;