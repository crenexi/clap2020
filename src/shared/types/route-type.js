import PropTypes, { shape } from 'prop-types';

const routeType = shape({
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
});

export default routeType;
