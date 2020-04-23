import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import CalendarCopy from './CalendarCopy';

const CalendarCopyContainer = ({ onCopy }) => {
  const eventMeta = useSelector(s => s.campaign.status.nextEvent.meta);
  const { title, start, location, description } = eventMeta;
  const formatDate = dt => moment(dt).format('MMM D @ h:mm A');

  const eventDetails = [
    { id: 'Title', icon: 'hand-holding-heart', text: title },
    { id: 'Time', icon: 'clock', text: formatDate(start) },
    { id: 'Location', icon: 'globe-americas', text: location },
    { id: 'Description', icon: 'align-left', text: description },
  ];

  const handleCopy = ({ id, text }) => {
    onCopy({
      label: id,
      value: text,
    });
  };

  return (
    <CalendarCopy eventDetails={eventDetails} onCopy={handleCopy} />
  );
};

CalendarCopyContainer.propTypes = {
  onCopy: PropTypes.func.isRequired,
};

export default CalendarCopyContainer;
