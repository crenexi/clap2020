import PropTypes, { shape } from 'prop-types';

const shareButton = shape({
  key: PropTypes.string.isRequired,
  isIconButton: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired,
});

export default shareButton;
