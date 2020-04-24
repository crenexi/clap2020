import PropTypes, { shape } from 'prop-types';

const posterType = shape({
  format: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  hdUrl: PropTypes.string.isRequired,
  bwUrl: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
  bwThumbUrl: PropTypes.string.isRequired,
});

export default posterType;
