/* Capitalize string */
export const capitalize = str => str[0].toUpperCase() + str.slice(1);

/* Keeps only alphabetical chars */
export const onlyAlpha = (str) => {
  const match = str.match(/[A-Z]/gi);
  return !match ? '' : match.join('');
};

/* Keeps only alphanumeric chars */
export const alphaNumeric = (str) => {
  const match = str.match(/[A-Z0-9]/gi);
  return !match ? '' : match.join('');
};

/* Checks if event is a Tab or Shift key press */
export const isTabOrShift = (e) => {
  return e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift');
};

/* Combine style classes from MUIs makeStyles */
export const combineClasses = (set1, set2) => {
  return Object.entries(set2).reduce((merged, [key, value]) => ({
    ...merged,
    [key]: (key in merged) ? `${merged[key]} ${value}` : value,
  }), set1);
};

/* Determine if user is on a native (mobile) device */
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

/* Convert string to camelCase */
export const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
};
