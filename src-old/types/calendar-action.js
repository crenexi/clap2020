import PropTypes, { shape } from 'prop-types';

const calendarAction = shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconPrefix: PropTypes.string,
});

export default calendarAction;
