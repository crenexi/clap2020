import PropTypes, { shape } from 'prop-types';

const countdownTickerType = shape({
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
});

export default countdownTickerType;
