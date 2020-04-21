import {
  colorContentBase,
  colorContentSubtle,
  themeCloudDark1,
  themeRedRoseBase,
  themeBlueRoseDark2,
  themeBlueRoseDark1,
  themeBlueRoseBase,
  themeMarineDark2,
  themeMarineDark1,
  themeMarineBase,
} from '@helpers/scss/exports';

const createPalette = () => ({
  type: 'light',
  common: {
    black: colorContentBase,
    white: '#fff',
  },
  text: {
    primary: colorContentBase,
    secondary: colorContentSubtle,
    disabled: colorContentSubtle,
    hint: colorContentSubtle,
  },
  background: {
    default: themeCloudDark1,
    paper: '#fff',
  },
  primary: {
    main: themeBlueRoseDark1,
    light: themeBlueRoseBase,
    dark: themeBlueRoseDark2,
    contrastText: '#fff',
  },
  secondary: {
    main: themeMarineDark1,
    light: themeMarineBase,
    dark: themeMarineDark2,
    contrastText: '#fff',
  },
  error: {
    main: themeRedRoseBase,
    contrastText: '#fff',
  },
});

export default createPalette;
