// Capitalize string
export const capitalize = str => str[0].toUpperCase() + str.slice(1);

// Checks if event is a Tab or Shift key press
export const isTabOrShift = (e) => {
  return e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift');
};

export default {
  capitalize,
  isTabOrShift,
};
