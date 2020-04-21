import PropTypes, { oneOfType, shape } from 'prop-types';

const reactRefType = oneOfType([
  PropTypes.func,
  shape({ current: PropTypes.any }),
]);

export default reactRefType;
