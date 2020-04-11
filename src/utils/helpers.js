// Capitalize string
export const capitalize = str => str[0].toUpperCase() + str.slice(1);

// Helper: keeps only alphabetical chars
export const onlyAlpha = str => str.match(/[A-Za-z]/g).join('');

// Checks if event is a Tab or Shift key press
export const isTabOrShift = (e) => {
  return e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift');
};

// Combine style classes from MUIs makeStyles
export const combineClasses = (set1, set2) => {
  return Object.entries(set2).reduce((merged, [key, value]) => ({
    ...merged,
    [key]: (key in merged) ? `${merged[key]} ${value}` : value,
  }), set1);
};

// Determine if user is on a native (mobile) device
export const userAgent = (() => {
  const getUA = () => navigator.userAgent.replace(/\s/g, '').toLowerCase();

  const isAndroid = (ua = getUA()) => !!(ua.match(/android/i));
  const isIOS = (ua = getUA()) => !!(ua.match(/iphone|ipad|ipod/i));

  const isMobile = (ua = getUA()) => {
    const otherRegEx = /webos|blackberry|windowsphone/i;
    return !!(isAndroid(ua) || isIOS(ua) || ua.match(otherRegEx));
  };

  return { isAndroid, isIOS, isMobile };
})();

export default {
  capitalize,
  onlyAlpha,
  isTabOrShift,
  userAgent,
};
