import React from 'react';
import PropTypes from 'prop-types';
import {
  google as calLinkGoogle,
  yahoo as calLinkYahoo,
} from 'calendar-link';
import eventMetaType from 'types/event-meta';
import useSnack from 'hooks/use-snack';
import logger from 'services/logger';
import copyService from 'services/copy-service';
import AddToCalendarView from './AddToCalendarView';

const AddToCalendar = ({ eventMeta, icsUrl }) => {
  const { startSnack } = useSnack();

  // Create and go to new event link
  const openNewEvent = (actionId) => {
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
    console.log(icsUrl);
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

  const handleCopy = ({ label, value }) => {
    copyService.copy(value)
      .then(() => startSnack({
        variant: 'success',
        message: `Copied ${label}`,
      }))
      .catch((err) => {
        logger.error(err);
        startSnack({
          variant: 'error',
          message: 'Something went wrong',
        });
      });
  };

  return (
    <AddToCalendarView
      eventMeta={eventMeta}
      onActionClick={handleActionClick}
      onCopy={handleCopy}
    />
  );
};

AddToCalendar.propTypes = {
  eventMeta: eventMetaType.isRequired,
  icsUrl: PropTypes.string.isRequired,
};

export default AddToCalendar;
