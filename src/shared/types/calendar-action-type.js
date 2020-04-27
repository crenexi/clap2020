import PropTypes, { shape } from 'prop-types';

const calendarActionType = shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
});

export default calendarActionType;
