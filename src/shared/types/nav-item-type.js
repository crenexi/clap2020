import PropTypes, { shape } from 'prop-types';

const navItemType = shape({
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
});

export default navItemType;
