import React from 'react';
import './Weather.css';
import search_icon from '../Assets/search_icon.png'
import sun_icon from '../Assets/sun_icon.png'
import humidity_icon from '../Assets/humidity_icon.png'
import wind_icon from '../Assets/wind_icon.png'
import snow_icom from '../Assets/snow_icon.png'
import rain_icon from '../Assets/rain_icon.png'
import cloud_icon from '../Assets/cloud_icon.png'

const Weather = () => {
  return (
    <div className='weather'>
     <div className='search-bar'>
        <input type='text' placeholder='search'/>
        <img src={search_icon} alt=''/>
     </div>
     <img src= {sun_icon} alt='' className='weather-icon'/>
     <p className='temperature'>16°C</p>
     <p className='location'>Nairobi</p>
     <div className='weather-data'>
        <div className='col'>
            <img src= {humidity_icon} alt='humidity_icon'>
            </img>
            <div>
                <p> 91%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className='col'>
            <img src= {wind_icon} alt='wind_icon'>
            </img>
            <div>
                <p>3.6km/h</p>
                <span>Wind Speed</span>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Weather;
