import scssVars from 'scss/utils/exports';

const paletteRows = [
  {
    title: 'Cloud',
    colors: [
      scssVars.themeCloudDark2,
      scssVars.themeCloudDark1,
      scssVars.themeCloudBase,
      scssVars.themeCloudLight1,
      scssVars.themeCloudLight2,
    ],
  },
  {
    title: 'Red Rose',
    colors: [
      scssVars.themeRedRoseDark2,
      scssVars.themeRedRoseDark1,
      scssVars.themeRedRoseBase,
      scssVars.themeRedRoseLight1,
      scssVars.themeRedRoseLight2,
    ],
  },
  {
    title: 'Blue Rose',
    colors: [
      scssVars.themeBlueRoseDark2,
      scssVars.themeBlueRoseDark1,
      scssVars.themeBlueRoseBase,
      scssVars.themeBlueRoseLight1,
      scssVars.themeBlueRoseLight2,
    ],
  },
  {
    title: 'Ocean',
    colors: [
      scssVars.themeOceanDark2,
      scssVars.themeOceanDark1,
      scssVars.themeOceanBase,
      scssVars.themeOceanLight1,
      scssVars.themeOceanLight2,
    ],
  },
  {
    title: 'Marine',
    colors: [
      scssVars.themeMarineDark2,
      scssVars.themeMarineDark1,
      scssVars.themeMarineBase,
      scssVars.themeMarineLight1,
      scssVars.themeMarineLight2,
    ],
  },
];

const themeConfig = {
  paletteRows,
};

export default themeConfig;
