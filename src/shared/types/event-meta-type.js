import PropTypes, { shape } from 'prop-types';

const eventMetaType = shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
});

export default eventMetaType;
