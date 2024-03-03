export const formatAstroCoordinates = (coord: string): string => {
  return coord.replace(':', 'h ').replace(':', 'm ') + 's';
}