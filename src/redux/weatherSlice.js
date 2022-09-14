import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { cities } from "./cities";
import { daysOfweek } from "./daysOfweek";
import axios from "axios";

export const getWeatherAsync = createAsyncThunk("weather/getWeatherAsync", async (url) => {
    
    const res = await axios.get(url);
    return res.data.daily
})

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        city: {
            "id": 34,
            "name": "İstanbul",
            "latitude": "41.0053",
            "longitude": "28.9770",
            "population": 14657434,
            "region": "Marmara"
        },
        cities: cities,
        daysOfweek: daysOfweek,
        data:null,
    },
    reducers: {
        changeCity: (state, action) => {
            let filtered = state.cities.filter(item => item.name === action.payload)[0];
            state.city = filtered;
        }
    },
    extraReducers:{
        [getWeatherAsync.fulfilled]:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const { changeCity } = weatherSlice.actions;
export default weatherSlice.reducer;