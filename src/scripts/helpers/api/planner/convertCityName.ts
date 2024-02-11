import { geocodingApi } from "."

export const convertCityName = async (cityName: string) => {
  try {
    const response = await geocodingApi.get(``, { params: { q: cityName } })
    return response.data
  } catch (error) {
    console.log(error)
    return error
  }
}