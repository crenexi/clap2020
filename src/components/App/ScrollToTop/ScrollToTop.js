import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import scrollService from 'services/scroll-service';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  const handleScroll = () => {
    const { scrollTo } = queryString.parse(search);

    // Scroll to top then element
    if (scrollTo) {
      window.scrollTo(0, 0);
      return setTimeout(() => {
        scrollService.scrollToElement(scrollTo);
      }, 0);
    }

    // Scroll to top by default (immediately)
    window.scrollTo(0, 0);
    return null;
  };

  // Handle scroll when path changes
  useEffect(() => {
    const timeOutId = handleScroll();
    return () => clearTimeout(timeOutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
