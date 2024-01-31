// API axiosinstance for weather
import axios from 'axios';

// Auth for astronomy api
const auth_token = btoa(`${process.env.REACT_APP_ASTRONOMY_API_APP_ID}:${process.env.REACT_APP_ASTRONOMY_API_APP_SECRET}`);

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
});

export const geocodingApi = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
})

export const astronomyApi = axios.create({
  baseURL: 'https://api.astronomyapi.com/api/v2',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Basic ${auth_token}`,
  }
})

export const moonApi = axios.create({
  baseURL: 'https://moon-phase.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_MOON_API_KEY,
    'x-rapidapi-host': 'moon-phase.p.rapidapi.com',
  }
})



weatherApi.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
  lang: 'fr',
}

geocodingApi.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
}