import React from 'react';
import PropTypes, { shape } from 'prop-types';
import moment from 'moment-timezone';
import FaIcon from 'components/shared/FaIcon';
import IconButton from 'components/shared/IconButton';
import './CalendarCopy.scss';

const CalendarCopy = ({ eventMeta, onCopy }) => {
  const { title, start, end, location, description } = eventMeta;

  const formatDate = dt => moment(dt).format('MMM D @ h:mm A');
  const timeText = `${formatDate(start)} - ${formatDate(end)}`;

  const eventDetails = [
    { id: 'Time', icon: 'clock', text: timeText },
    { id: 'Location', icon: 'globe-americas', text: location },
    { id: 'Description', icon: 'align-left', text: description },
  ];

  // Event title
  const titleDetail = (
    <div styleName="detail detail--title">
      <div styleName="detail__text">{title}</div>
      <div styleName="detail__action">
        <IconButton icon="copy" size="small" click={() => onCopy(title)} />
      </div>
    </div>
  );

  // Event details
  const details = eventDetails.map(({ icon, text }) => (
    <div styleName="detail" key={text}>
      <div styleName="detail__icon">
        <FaIcon icon={icon} />
      </div>
      <div styleName="detail__text">{text}</div>
      <div styleName="detail__action">
        <IconButton icon="copy" size="small" click={() => onCopy(text)} />
      </div>
    </div>
  ));

  return (
    <div styleName="frame">
      <div styleName="details">
        {titleDetail}
        {details}
      </div>
    </div>
  );
};

CalendarCopy.propTypes = {
  eventMeta: shape({
    title: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default CalendarCopy;
