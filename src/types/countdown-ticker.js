import PropTypes, { shape } from 'prop-types';

const countdown = shape({
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
});

export default countdown;
