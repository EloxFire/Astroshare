export const raToDegrees = (hours: number, minutes: number, seconds: number) => {
  return (hours + minutes / 60 + seconds / 3600) * 15;
}