import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "../redux/weatherSlice";

export function Dropdown() {
    const cities = useSelector(state => state.weather.cities);
    let city = useSelector(state => state.weather.city);

    const dispatch = useDispatch();
    return (
        <div className="select-box">
            <select
                name="cities"
                id="cities"
                value={city.name}
                onChange={e => dispatch(changeCity(e.target.value))}
            >{cities.map((item, i) => (
                <option value={item.name} key={i}>
                    {item.name}
                </option>)
            )}
            </select>
        </div>
    );
}

