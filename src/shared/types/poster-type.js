import PropTypes, { shape, oneOf } from 'prop-types';

const posterType = shape({
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  url: PropTypes.string.isRequired,
  hdUrl: PropTypes.string.isRequired,
  bwUrl: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
  bwThumbUrl: PropTypes.string.isRequired,
});

export default posterType;
