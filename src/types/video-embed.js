import PropTypes, { shape } from 'prop-types';

const videoEmbed = shape({
  title: PropTypes.string.isRequired,
});

export default videoEmbed;
