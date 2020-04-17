import React from 'react';
import {
  google as calLinkGoogle,
  yahoo as calLinkYahoo,
} from 'calendar-link';
import useContent from 'hooks/use-content';
import copyService from 'services/copy-service';
import AddToCalendarView from './AddToCalendarView';

const AddToCalendar = () => {
  const { campaignContent } = useContent();
  const { nextEvent } = campaignContent.status;
  const eventMeta = nextEvent.meta;

  // Link for email button
  const emailHref = (() => {
    return 'mailto:';
  })();

  // Create and go to new event link
  const openNewEvent = (actionId) => {
    console.log(actionId);

    const url = (() => {
      if (actionId === 'google') return calLinkGoogle(eventMeta);
      if (actionId === 'yahoo') return calLinkYahoo(eventMeta);
      return '';
    });

    console.log(url);
  };

  // Open the dialog that prompts ICS download
  const openDownloadDialog = () => {
    console.log('download prompt...');
  };

  const handleActionClick = (actionId) => {
    // URL-supported actions
    if (['google', 'yahoo'].includes(actionId)) {
      openNewEvent(actionId);
      return;
    }

    // Otherwise download
    openDownloadDialog();
  };

  const handleCopy = (text) => {
    copyService.copy(text);
  };

  return (
    <AddToCalendarView
      eventMeta={eventMeta}
      emailHref={emailHref}
      onActionClick={handleActionClick}
      onCopy={handleCopy}
    />
  );
};

export default AddToCalendar;
