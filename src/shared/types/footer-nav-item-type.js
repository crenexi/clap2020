import PropTypes, { shape } from 'prop-types';

const footerNavItemType = shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export default footerNavItemType;
