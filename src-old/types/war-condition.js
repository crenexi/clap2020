import PropTypes, { shape } from 'prop-types';

const warCondition = shape({
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
});

export default warCondition;
