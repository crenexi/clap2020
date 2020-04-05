import PropTypes, { shape } from 'prop-types';

const navItem = shape({
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
});

export default navItem;
