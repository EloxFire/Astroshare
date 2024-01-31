import { moonApi } from ".";

export const getMoonInfos = async (lat: number, lon: number) => {

  const params = {
    lat: lat.toString(),
    lon: lon.toString(),
  }

  try {
    const moonInfos = await moonApi.get('/advanced', { params: params });
    console.log(moonInfos.data);
    return moonInfos.data;
  } catch (error) {
    console.log(error);
    return error;

  }
}