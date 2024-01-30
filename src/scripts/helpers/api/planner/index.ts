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



weatherApi.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
  lang: 'fr',
}

geocodingApi.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
}