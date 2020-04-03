import * as Scroll from 'react-scroll';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import scssVars from 'scss/utils/exports';

const ScrollService = () => {
  const scroller = Scroll.scroller;
  const { breakpoints } = useTheme();

  const defaultOffset = () => {
    if (useMediaQuery(breakpoints.down('xs'))) {
      return scssVars.uiLayoutPxHeaderHeightXs;
    }

    if (useMediaQuery(breakpoints.down('xs'))) {
      return scssVars.uiLayoutPxHeaderHeightSm;
    }

    return scssVars.uiLayoutHeaderHeightGtSm;
  };

  // Scroll to a named element
  const scrollToElement = (elementName, offset) => {
    scroller.scrollTo(elementName, {
      duration: 750,
      delay: 250,
      smooth: true,
      offset: offset || defaultOffset(),
    });
  };

  return { scrollToElement };
};

export default new ScrollService();
