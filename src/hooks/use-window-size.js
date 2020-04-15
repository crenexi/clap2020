import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const getWindowSize = () => {
  const docElm = document && document.documentElement;
  const { clientWidth, clientHeight } = docElm || {};

  return {
    windowWidth: clientWidth || window.innerWidth,
    windowHeight: clientHeight || window.innerHeight,
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({});

  // Throttle the change
  const throttled = throttle(() => {
    setWindowSize(getWindowSize());
  }, 100);

  // Register (and unregister) the listener
  useEffect(() => {
    window.addEventListener('resize', throttled);
    return () => window.addEventListener('resize', throttled);
  }, []);

  return windowSize;
};

export default useWindowSize;
