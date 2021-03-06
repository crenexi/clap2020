import PropTypes, { shape } from 'prop-types';

const brandPlatformType = shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  accountId: PropTypes.string,
});

export default brandPlatformType;
