import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../Assets/search_icon.png'
import sun_icon from '../Assets/sun_icon.png'
import humidity_icon from '../Assets/humidity_icon.png'
import wind_icon from '../Assets/wind_icon.png'
import snow_icon from '../Assets/snow_icon.png'
import rain_icon from '../Assets/rain_icon.png'
import cloud_icon from '../Assets/cloud_icon.png'

const Weather = () => {
    const [weatherData, setWeatherData] = useState (false)
    const allIcons = {
        // "01d": clear_icon,
        // "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        // "04d": drizzle_icon,
        // "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "010d": rain_icon,
        "010n": rain_icon,
        "013d": snow_icon,
        "013n": snow_icon,
    }
    const search = async (city) =>{
try {
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid= ${import.meta.env.REACT_APP_API_KEY }`;
    const response = await (url);
    const data = await response.json()
    console.log (data);
    const icons = allIcons[data.weather[0].icon] 
    // || clear_icon
    setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icons
    })
} catch (error) {
    
}
    };
    useEffect(()=>{
        search("Nairobi");
    })

  return (
    <div className='weather'>
     <div className='search-bar'>
        <input type='text' placeholder='search'/>
        <img src={search_icon} alt=''/>
     </div>
     <img src= {sun_icon} alt='' className='weather-icon'/>
     <p className='temperature'>{weatherData.temperature}°C</p>
     <p className='location'>{weatherData.location}</p>
     <div className='weather-data'>
        <div className='col'>
            <img src= {humidity_icon} alt='humidity_icon'>
            </img>
            <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidy</span>
            </div>
        </div>
        <div className='col'>
            <img src= {wind_icon} alt='wind_icon'>
            </img>
            <div>
                <p>{weatherData.windSpeed}/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Weather;
