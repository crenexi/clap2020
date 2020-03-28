import colors from '../scss/utils/variables/_colors.scss';

const paletteRows = [
  {
    title: 'Dark',
    colors: [
      colors.colorDark1,
      colors.colorDark2,
      colors.colorDark3,
    ],
  },
  {
    title: 'Light',
    colors: [
      colors.colorLight1,
      colors.colorLight2,
      colors.colorLight3,
    ],
  },
  {
    title: 'Sunset',
    colors: [
      colors.themeSunsetLight,
      colors.themeSunsetBase,
      colors.themeSunsetDark,
    ],
  },
  {
    title: 'Storm',
    colors: [
      colors.themeStormLight,
      colors.themeStormBase,
      colors.themeStormDark,
    ],
  },
  {
    title: 'Reef',
    colors: [
      colors.themeReefLight,
      colors.themeReefBase,
      colors.themeReefDark,
    ],
  },
  {
    title: 'Sand',
    colors: [
      colors.themeSandLight,
      colors.themeSandBase,
      colors.themeSandDark,
    ],
  },
  {
    title: 'Road',
    colors: [
      colors.themeRoadLight,
      colors.themeRoadBase,
      colors.themeRoadDark,
    ],
  },
];

const theme = {
  palette: colors,
  paletteRows,
};

export default theme;
