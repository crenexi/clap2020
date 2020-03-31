import PropTypes, { shape } from 'prop-types';

const joinInvite = shape({
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  dateText: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
});

export default joinInvite;
