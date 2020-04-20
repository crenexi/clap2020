import PropTypes, { shape } from 'prop-types';

const routerMatch = shape({
  path: PropTypes.string.isRequired,
});

export default routerMatch;
