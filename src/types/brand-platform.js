import PropTypes, { shape } from 'prop-types';

const brandPlatform = shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
});

export default brandPlatform;
