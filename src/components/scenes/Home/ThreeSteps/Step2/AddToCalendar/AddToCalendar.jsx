import React from 'react';
import PropTypes from 'prop-types';
import {
  google as calLinkGoogle,
  yahoo as calLinkYahoo,
} from 'calendar-link';
import eventMetaType from 'types/event-meta';
import useSnack from 'hooks/use-snack';
import logger from 'services/logger';
import { capitalize } from 'utils/helpers';
import copyService from 'services/copy-service';
import AddToCalendarView from './AddToCalendarView';

const AddToCalendar = ({ eventMeta, icsUrl }) => {
  const alphaNumeric = (str) => {
    const match = str.match(/[A-Z0-9]/gi);
    return !match ? '' : match.join('');
  };

  const { startSnack } = useSnack();

  // Create and go to new event link
  const openNewEvent = (actionId) => {
    const actionTitle = capitalize(actionId);

    // Ensure for calendar-link API
    const event = {
      title: eventMeta.title.trim(),
      start: alphaNumeric(eventMeta.start),
      end: alphaNumeric(eventMeta.end),
      location: eventMeta.location.trim(),
      description: eventMeta.description.trim(),
    };

    const newEventUrl = (() => {
      if (actionId === 'google') return calLinkGoogle(event);
      if (actionId === 'yahoo') return calLinkYahoo(event);
      return '';
    })();

    // Delay for snack
    startSnack({ message: `Opening ${actionTitle}...` });
    const timeoutId = setTimeout(() => {
      window.open(newEventUrl, '_blank');
      clearTimeout(timeoutId);
    }, 3000);
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
