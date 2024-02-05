import { airPollutionApi } from './index';

export const getAirQuality = async (lat: number, lon: number) => {

  try {
    const response = await airPollutionApi.get('/air_pollution', { params: { lat: lat, lon: lon } });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}