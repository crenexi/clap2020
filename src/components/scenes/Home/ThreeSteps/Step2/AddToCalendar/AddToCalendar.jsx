import React from 'react';
import useContent from 'hooks/use-content';
import calendarService from 'services/calendar-service';
import AddToCalendarGrid from './AddToCalendarGrid';
import './AddToCalendar.scss';

const AddToCalendar = () => {
  const { campaignContent } = useContent();
  const { nextEvent } = campaignContent.status;

  const clients = [
    { id: 'google', name: 'Google Calendar' },
    { id: 'apple', name: 'Apple Calendar' },
    { id: 'yahoo', name: 'Yahoo Calendar' },
  ];

  const handleClientClick = (clientId) => {
    calendarService.createLink({
      event: nextEvent.meta,
      to: clientId,
    });
  };

  return (
    <div styleName="frame">
      <AddToCalendarGrid
        clients={clients}
        onClientClick={handleClientClick}
      />
    </div>
  );
};

export default AddToCalendar;
