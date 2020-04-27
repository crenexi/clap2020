import * as Scroll from 'react-scroll';

const scroller = Scroll.scroller;

// Scroll to a named element
const scrollToElement = (elementName, offset) => {
  const defaultOffset = (() => {
    const globalHeaderElm = document.getElementById('global-header');
    return !globalHeaderElm ? 0 : globalHeaderElm.offsetHeight * -1;
  })();

  const defaultOpts = {
    duration: 500,
    delay: 150,
    smooth: true,
    offset: offset + defaultOffset || defaultOffset,
  };

  setTimeout(() => {
    scroller.scrollTo(elementName, defaultOpts);
  }, 250);
};

const scrollService = { scrollToElement };

export default scrollService;
