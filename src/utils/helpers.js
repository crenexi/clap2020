// Capitalize string
export const capitalize = str => str[0].toUpperCase() + str.slice(1);

// Helper: keeps only alphabetical chars
export const onlyAlpha = str => str.match(/[A-Za-z]/g).join('');

// Checks if event is a Tab or Shift key press
export const isTabOrShift = (e) => {
  return e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift');
};

export default {
  capitalize,
  onlyAlpha,
  isTabOrShift,
};
