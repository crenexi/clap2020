import React from 'react';
import calendarService from 'services/calendar-service';
import AddToCalendarGrid from './AddToCalendarGrid';

const AddToCalendar = () => {
  const clients = [
    { id: 'google', name: 'Google Calendar' },
    { id: 'apple', name: 'Apple Calendar' },
    { id: 'microsoft', name: 'Outlook & Live' },
    { id: 'yahoo', name: 'Yahoo Calendar' },
  ];

  const handleClientClick = (clientId) => {
    const href = (() => {
      switch (clientId) {
        case 'google':
          return calendarService.googleLink();
        case 'apple':
          return calendarService.icsLink();
        case 'microsoft':
          return calendarService.liveLink();
        case 'yahoo':
          return calendarService.yahooLink();
        default:
          return '';
      }
    })();

    console.log(href);
  };

  return (
    <div styleName="frame">
      <div styleName="brief">
        <p>asljdflkjaslkdjfl asdf sadf </p>
      </div>
      <div styleName="main">
        <AddToCalendarGrid
          clients={clients}
          onClientClick={handleClientClick}
        />
      </div>
    </div>
  );
};

export default AddToCalendar;
