import React, {useState, useEffect} from 'react';
import"../Styles/_Weather_card.scss";

const Weather = ({City, Country}) => {

    const [weather, setWeather] = useState({});
    const API_KEY = 'b765ae87b3be483d8cf174715222501';
    
    useEffect(()=>{

        const handleAPI = async ()=>{
            const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${City},${Country}`;
            const res = await fetch(url);
            const log = await res.json();
            setWeather(log);
        }
        handleAPI();

    },[]);

    const {current, location} = weather;
    const condition = current?.condition;
    return (  
        <div className='Weather_card'>
            <img src={condition?.icon} alt='icon-img'/>
            <div className='weather-text'>
                <h3>Weather in {City}</h3>
                <p>Weather: {condition?.text}</p>
                <p>Wind velocity: {current?.wind_kph} </p>
                <p>Temperature: {current?.temp_c}°C</p>
                <p>Preasure: {current?.pressure_in}</p>
            </div>
           
        </div>
    );
}
 
export default Weather;