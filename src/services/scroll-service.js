import * as Scroll from 'react-scroll';

const ScrollService = () => {
  const scroller = Scroll.scroller;

  // Scroll to a named element
  const scrollToElement = (elementName, offset) => {
    const defaultOffset = () => {
      const globalHeaderElm = document.getElementById('global-header');
      return !globalHeaderElm ? 0 : globalHeaderElm.offsetHeight * -1;
    };

    const defaultOpts = {
      duration: 750,
      delay: 250,
      smooth: true,
      offset: offset || defaultOffset(),
    };

    setTimeout(() => {
      scroller.scrollTo(elementName, defaultOpts);
    }, 250);
  };

  return { scrollToElement };
};

export default new ScrollService();
