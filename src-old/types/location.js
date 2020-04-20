import PropTypes, { shape } from 'prop-types';

const location = shape({
  pathname: PropTypes.string.isRequired,
});

export default location;
