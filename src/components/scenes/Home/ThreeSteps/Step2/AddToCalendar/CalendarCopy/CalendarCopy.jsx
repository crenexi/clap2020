import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import eventMetaType from 'types/event-meta';
import FaIcon from 'components/shared/FaIcon';
import IconButton from 'components/shared/IconButton';
import './CalendarCopy.scss';

const CalendarCopy = ({ eventMeta, onCopy }) => {
  const { title, start, location, description } = eventMeta;
  const formatDate = dt => moment(dt).format('MMM D @ h:mm A');

  const eventDetails = [
    { id: 'Title', icon: 'hand-holding-heart', text: title },
    { id: 'Time', icon: 'clock', text: formatDate(start) },
    { id: 'Location', icon: 'globe-americas', text: location },
    { id: 'Description', icon: 'align-left', text: description },
  ];

  // Event details
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
        <IconButton icon="copy" size="small" click={() => onCopy(text)} />
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
  eventMeta: eventMetaType.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default CalendarCopy;
