import PropTypes, { shape, oneOf } from 'prop-types';

const videoEmbed = shape({
  isFeatured: PropTypes.bool.isRequired,
  bucket: oneOf(['frontLines', 'response', 'essential']),
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
});

export default videoEmbed;
