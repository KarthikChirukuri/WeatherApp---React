import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const InfoBox = ({ weatherInfo }) => {
  const INIT_URL =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0";

  // Helper to choose icon based on weather
  const getWeatherIcon = () => {
    if (weatherInfo.humidity > 80) {
      return <ThunderstormIcon sx={{ ml: 1 }} titleAccess="Thunderstorm" />;
    }
    if (weatherInfo.temp > 15) {
      return <WbSunnyIcon sx={{ ml: 1 }} titleAccess="Sunny" />;
    }
    return <AcUnitIcon sx={{ ml: 1 }} titleAccess="Snowy" />;
  };

  return (
    <div className="cardContainer">
      <h1>{weatherInfo.weather}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title={weatherInfo.weather}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherInfo.city}
            {getWeatherIcon()}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature: {weatherInfo.temp}°
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Humidity: {weatherInfo.humidity}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Min Temp: {weatherInfo.tempMin}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Max Temp: {weatherInfo.tempMax}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;