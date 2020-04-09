import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  // Throttle the change
  const throttled = throttle(() => {
    setWindowHeight(!window ? 0 : window.innerHeight);
  }, 100);

  // Register (and unregister) the listener
  useEffect(() => {
    window.addEventListener('resize', throttled);
    return () => window.addEventListener('resize', throttled);
  }, []);

  return windowHeight;
};

export default useWindowHeight;
