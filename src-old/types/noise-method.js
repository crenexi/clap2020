import PropTypes, { shape } from 'prop-types';

const noiseMethod = shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
});

export default noiseMethod;
