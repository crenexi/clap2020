import React from 'react';

// This component exists around route children in
// order to delay the visibility of the route for
// 0 seconds, effectively preventing the children
// from being visible before the ScrollToTop is
// executed. Without this it's an annoying glitch
// when switching routes!
// UPDATE: NO LONGER NEEDED AS SOLUTION
const withOpacityDelay = (WrappedComponent) => {
  const setRootOpacity = (opacity) => {
    const rootElm = document.getElementById('root');
    rootElm.style.opacity = opacity;
  };

  const HOC = (props) => {
    setRootOpacity(0);
    setTimeout(() => setRootOpacity(1), 0);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withOpacityDelay;
