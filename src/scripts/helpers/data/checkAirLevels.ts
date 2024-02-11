
// Qualitative name	Index	Pollutant concentration in μg / m3
// SO2	NO2	PM10	PM2.5	O3	CO
// Good	1[0; 20)[0; 40)[0; 20)[0; 10)[0; 60)[0; 4400)
// Fair	2[20; 80)[40; 70)[20; 50)[10; 25)[60; 100)[4400; 9400)
// Moderate	3[80; 250)[70; 150)[50; 100)[25; 50)[100; 140)[9400 - 12400)
// Poor	4[250; 350)[150; 200)[100; 200)[50; 75)[140; 180)[12400; 15400)
// Very Poor	5	⩾350	⩾200	⩾200	⩾75	⩾180	⩾15400

// Good green : #00FF00
// Fair yellow : #FFFF00
// Moderate orange : #FFA500
// Poor red : #FF0000

// Write a function that takes a component and a value and returns the associated color for this component and value.
export const checkAirLevels = (component: 'SO2' | 'NO2' | 'PM10' | 'PM2_5' | 'O3' | 'CO', value: number) => {
  const thresholds = {
    SO2: [20, 80, 250, 350],
    NO2: [40, 70, 150, 200],
    PM10: [20, 50, 100, 200],
    PM2_5: [10, 25, 50, 75],
    O3: [60, 100, 140],
    CO: [4400, 9400, 12400, 15400],
  };

  const colors = ['#00FF00', '#FFFF00', '#FFA500', '#FF0000', '#8B0000'];

  for (let i = 0; i < thresholds[component].length; i++) {
    if (value < thresholds[component][i]) {
      return colors[i];
    }
  }

  return colors[colors.length - 1];
};