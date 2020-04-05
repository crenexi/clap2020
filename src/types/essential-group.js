import PropTypes, { shape } from 'prop-types';

const essentialGroup = shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFrontLine: PropTypes.bool.isRequired,
});

export default essentialGroup;
