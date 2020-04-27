import PropTypes, { shape } from 'prop-types';

const routerMatchType = shape({
  path: PropTypes.string.isRequired,
});

export default routerMatchType;
