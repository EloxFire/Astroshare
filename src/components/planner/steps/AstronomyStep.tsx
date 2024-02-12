import React, { useEffect, useState } from 'react'
import { isObjectVisible } from '../../../scripts/helpers/astronomy/isObjectVisible'
import { calculateZenith } from '../../../scripts/helpers/astronomy/calculateZenith'
import dayjs from 'dayjs'
// import Papa from 'papaparse'

export default function AstronomyStep() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const zenith = calculateZenith(43.531464, 5.4508, dayjs().format('YYYY-MM-DD'), dayjs().format('HH:mm:ss'));
    const visible = isObjectVisible(zenith.ra, zenith.dec, '14h 03m 13.32s', 54) // M101
    // const visible = isObjectVisible(zenith.ra, zenith.dec, '16h 47m 13.69s', -1) // M12
    // const visible = isObjectVisible(zenith.ra, zenith.dec, '05h 35m 18.04s', -5) // M42
    console.log(visible);

    setIsVisible(visible)

  }, [])

  useEffect(() => {
    // Papa.parse
  }, [])

  return (
    <div>
      <h1>TEST</h1>
      <h1>{isVisible ? 'true' : 'false'}</h1>
    </div>
  )
}
