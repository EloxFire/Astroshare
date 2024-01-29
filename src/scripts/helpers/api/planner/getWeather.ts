import { weatherApi } from "."

export const getWeather = async (lat: number, lng: number) => {
  try {
    const response = await weatherApi.get('/current', { params: { lat, lon: lng } })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}