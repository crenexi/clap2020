import PropTypes, { shape } from 'prop-types';

const warConditionType = shape({
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
});

export default warConditionType;
