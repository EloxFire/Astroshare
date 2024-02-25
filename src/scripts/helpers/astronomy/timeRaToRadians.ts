// Export a function that takes a right ascension in following format : '14h 03m 13.32s' and returns the right ascension in radians
export function timeRaToRadians(time: string): number {
  const [hours, minutes, seconds] = time.split(' ').map((el) => parseFloat(el))
  return (hours + minutes / 60 + seconds / 3600) * (Math.PI / 12)
}