import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherAsync } from "../redux/weatherSlice";

export function Weather() {
    let city = useSelector(state => state.weather.city);
    let data = useSelector(state => state.weather.data);

    const dispatch = useDispatch();
    useEffect(() => {
        const api_key = '779c271986d91ab4f86362ce5d62e73c';
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&exclude=minutely,hourly&appid=${api_key}`
        dispatch(getWeatherAsync(url))
    }, [dispatch, city])
    
    if(!data){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div className="daily-wrapper">
            <div className="img-description">
                <img 
                src={`https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`}
                alt={data[0].weather[0].description}/>
                <p>{data[0].weather[0].description}</p>
            </div>
            <div className="temp">
            {Math.round(data[0].temp.day)}
                &deg;C
            </div>
            <div className="wind">
                <p>Wind: {data[0].wind_speed} kmph</p>
                <p>Humidity: % {data[0].humidity}</p>
                <p>Pressure: {data[0].pressure} mb</p>
            </div>
        </div>
    );
}