import PropTypes, { shape, arrayOf } from 'prop-types';

export const title = arrayOf(shape({
  text: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
}));

export const dateText = shape({
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
});

const fullHeader = shape({
  title,
  dateText,
  tagsPretext: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
});

export default fullHeader;
