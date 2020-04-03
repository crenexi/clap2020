import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useDocumentScroll = ({ onScrollThrottled }) => {
  const [, setScrollPosition] = useState(0);
  let prevScrollTop = 0;

  // Handle the scroll
  const handleScroll = () => {
    const scrollElm = document.documentElement || document.body;
    const { scrollTop: currScrollTop } = scrollElm;

    setScrollPosition((prevPosition) => {
      prevScrollTop = prevPosition;
      return currScrollTop;
    });

    // Make the callback with scroll data
    onScrollThrottled({ prevScrollTop, currScrollTop });
  };

  // Create throttle from scroll handler
  const throttled = throttle(handleScroll, 350);

  // Register (and unregister) the scroll listener
  useEffect(() => {
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, []);
};

export default useDocumentScroll;
