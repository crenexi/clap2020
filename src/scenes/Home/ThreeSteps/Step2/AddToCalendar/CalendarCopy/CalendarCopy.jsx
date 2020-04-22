import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import { FaIcon, IconButton } from '@components/ui';
import './CalendarCopy.scss';

const CalendarCopy = ({ eventDetails, onCopy }) => {
  const details = eventDetails.map(({ id, icon, text }) => (
    <div styleName="detail" key={text}>
      <div styleName="detail__icon">
        <FaIcon icon={icon} />
      </div>
      <div styleName="detail__main">
        <div styleName="detail__label">{id}</div>
        <div styleName="detail__text">{text}</div>
      </div>
      <div styleName="detail__action">
        <IconButton
          icon="copy"
          size="small"
          click={() => onCopy({ id, text })}
        />
      </div>
    </div>
  ));

  return (
    <div styleName="frame">
      <div styleName="heading">Event Details</div>
      <div styleName="details">{details}</div>
    </div>
  );
};

CalendarCopy.propTypes = {
  eventDetails: arrayOf(shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default CalendarCopy;
