import React from "react";
import { useSelector } from "react-redux";

export function Days() {
    const data = useSelector(state => state.weather.data);
    const daysOfweek = useSelector(state => state.weather.daysOfweek);

    if (!data) {
        return (<div />
        )
    }

    return (
        <div className="days">
            {
                data.slice(1, 8).map((item, index) => (
                    <div className="day" key={index}>
                        <p>{daysOfweek[new Date(item.dt * 1000).getDay()]}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description} />
                        <p>
                            {Math.round(item.temp.day)}
                            &deg;C
                        </p>
                    </div>
                ))
            }
        </div>
    );
}