import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import createPalette from './create-palette';
import createTypography from './create-typography';
import createBreakpoints from './create-breakpoints';

const createTheme = () => {
  const palette = createPalette();
  const typography = createTypography();
  const breakpoints = createBreakpoints();

  const theme = createMuiTheme({
    palette,
    typography,
    breakpoints,
  });

  // Create responsive theme
  return responsiveFontSizes(theme, {
    // Note: breakpoints.values is an object of values
    breakpoints: Object.values(breakpoints.values),
  });
};

export default { createTheme };
