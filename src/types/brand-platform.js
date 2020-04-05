import PropTypes, { shape } from 'prop-types';

const brandPlatform = shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
});

export default brandPlatform;
