import PropTypes, { shape } from 'prop-types';

const shareInviteItemType = shape({
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
});

export default shareInviteItemType;
