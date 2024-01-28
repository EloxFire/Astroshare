// API axiosinstance for weather
import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall',
});

export const geocodingApi = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0/direct',
})


weatherApi.defaults.params = {
  appid: process.env.REACT_APP_WEATHER_API_KEY,
  units: 'metric',
  lang: 'fr',
}

// geocodingApi.defaults.params = {
//   appid: process.env.REACT_APP_WEATHER_API_KEY,
// }