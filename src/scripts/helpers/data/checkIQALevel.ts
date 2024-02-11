export const checkIQALevel = (value: number) => {
  const colors = ['#00FF00', '#FFFF00', '#FFA500', '#FF0000', '#8B0000'];

  if (value === 1) {
    return colors[0];
  } else if (value === 2) {
    return colors[1];
  } else if (value === 3) {
    return colors[2];
  } else if (value === 4) {
    return colors[3];
  } else if (value === 5) {
    return colors[4];
  } else {
    return '#FFF'
  }
}