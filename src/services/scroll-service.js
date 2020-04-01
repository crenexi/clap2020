import * as Scroll from 'react-scroll';

const ScrollService = () => {
  const scroller = Scroll.scroller;

  // Scroll to a named element
  const scrollToElement = (elementName, offset = 0) => {
    scroller.scrollTo(elementName, {
      offset,
      duration: 750,
      delay: 250,
      smooth: true,
    });
  };

  return { scrollToElement };
};

export default new ScrollService();
