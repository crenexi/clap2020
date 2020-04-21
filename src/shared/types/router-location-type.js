import PropTypes, { shape } from 'prop-types';

const routerLocationType = shape({
  pathname: PropTypes.string.isRequired,
});

export default routerLocationType;
