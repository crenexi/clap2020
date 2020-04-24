import PropTypes, { shape, oneOf } from 'prop-types';

const posterSelectionType = shape({
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  isBlackWhite: PropTypes.bool.isRequired,
});

export default posterSelectionType;
