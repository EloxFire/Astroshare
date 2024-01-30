import { astronomyApi } from ".";
import { POSTObserver } from "../../../types/Observer";

export const getMoonPhase = async (observer: POSTObserver) => {
  console.log("Generating moon phase");


  const data = {
    "observer": observer,
    "style": "default",
    "format": "svg",
    "view": {
      "type": "portrait-simple",
      "orientation": "north-up"
    }
  }

  try {
    const moonData = await astronomyApi.post('/studio/moon-phase', { data })
    console.log(moonData);

    return moonData.data
  } catch (error) {
    console.log(error);
    return error;
  }
}