import PropTypes, { shape } from 'prop-types';

const navItem = shape({
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
});

export default navItem;
