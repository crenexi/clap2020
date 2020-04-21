import React from 'react';
import PropTypes, { shape } from 'prop-types';
import FaIcon from 'components/ui/FaIcon';
import './ClapTime.scss';

const ClapTime = ({ event }) => (
  <div styleName="dt">
    <span styleName="dt-span">
      <span styleName="dt-icon">
        <FaIcon icon="calendar-day" />
      </span>
      <span styleName="dt-text">{event.day}, {event.date}</span>
    </span>
    <span styleName="dt-span">
      <span styleName="dt-icon">
        <FaIcon icon="clock" />
      </span>
      <span styleName="dt-text">{event.time}</span>
    </span>
  </div>
);

ClapTime.propTypes = {
  event: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClapTime;
