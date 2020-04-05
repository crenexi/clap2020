import PropTypes, { shape, oneOf } from 'prop-types';

const essentialGroup = shape({
  name: PropTypes.string.isRequired,
  bucket: oneOf(['frontLine', 'response', 'essential']),
  icon: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default essentialGroup;
