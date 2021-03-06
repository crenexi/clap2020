import PropTypes, { shape, oneOf, arrayOf } from 'prop-types';

const shareEditorOptionsType = shape({
  selectedPoster: oneOf(['', 'story', 'square', 'rectangle']).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  statesMenu: arrayOf(PropTypes.string).isRequired,
});

export default shareEditorOptionsType;
