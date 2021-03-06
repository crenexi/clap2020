import PropTypes, { shape, oneOf } from 'prop-types';

const essentialGroupType = shape({
  name: PropTypes.string.isRequired,
  bucket: oneOf(['frontLines', 'response', 'essential']),
  icon: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default essentialGroupType;
