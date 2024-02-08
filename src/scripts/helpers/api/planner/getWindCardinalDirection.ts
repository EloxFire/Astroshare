// N(-11.25 to 11.25), NNE(11.25 to 33.75), ENE(33.75 to 56.25), E(56.25 to 78.75), ESE(101.25 to 123.75), SE(123.75 to 146.25), SSE(146.25 to 168.75), S(168.75 to 191.25), SSW(191.25 to 213.75), SW(213.75 to 236.25), WSW(236.25 to 258.75), W(258.75 to 281.25), WNW(281.25 to 303.75), NW(303.75 to 326.25) and NNW(326.25 to 348.75).

export const getWindCardinalDirectionFromDegrees = (degree: number) => {
  if (degree >= 348.75 || degree < 11.25) {
    return 'N'
  } else if (degree >= 11.25 && degree < 33.75) {
    return 'NNE'
  } else if (degree >= 33.75 && degree < 56.25) {
    return 'ENE'
  } else if (degree >= 56.25 && degree < 78.75) {
    return 'E'
  } else if (degree >= 78.75 && degree < 101.25) {
    return 'ESE'
  } else if (degree >= 101.25 && degree < 123.75) {
    return 'SE'
  } else if (degree >= 123.75 && degree < 146.25) {
    return 'SSE'
  } else if (degree >= 146.25 && degree < 168.75) {
    return 'S'
  } else if (degree >= 168.75 && degree < 191.25) {
    return 'SSW'
  } else if (degree >= 191.25 && degree < 213.75) {
    return 'SW'
  } else if (degree >= 213.75 && degree < 236.25) {
    return 'WSW'
  } else if (degree >= 236.25 && degree < 258.75) {
    return 'W'
  } else if (degree >= 258.75 && degree < 281.25) {
    return 'WNW'
  } else if (degree >= 281.25 && degree < 303.75) {
    return 'NW'
  } else if (degree >= 303.75 && degree < 326.25) {
    return 'NNW'
  } else {
    return 'N'
  }
}