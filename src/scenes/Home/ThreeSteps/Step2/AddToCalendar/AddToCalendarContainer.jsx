import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  google as calLinkGoogle,
  yahoo as calLinkYahoo,
} from 'calendar-link';
import useSnack from '@hooks/use-snack';
import logger from '@services/logger';
import { alphaNumeric } from '@helpers';
import copyService from '@services/copy-service';
import AddToCalendar from './AddToCalendar';

const AddToCalendarContainer = () => {
  const actions = [
    {
      id: 'google',
      label: 'Add to Google',
      icon: 'google',
      iconPrefix: 'fab',
    },
    {
      id: 'apple',
      label: 'Add to Apple',
      icon: 'apple',
      iconPrefix: 'fab',
    },
    {
      id: 'yahoo',
      label: 'Add to Yahoo',
      icon: 'yahoo',
      iconPrefix: 'fab',
    },
    {
      id: 'other',
      label: 'Other (.ICS File)',
      icon: 'file-download',
    },
  ];


  // Content
  const eventMeta = useSelector(s => s.campaign.status.nextEvent.meta);

  // Snack API
  const { pushSnack } = useSnack();

  // State
  const zeroGuideState = { open: false, closing: false };
  const [guideState, setGuideState] = useState(zeroGuideState);

  // Download guide handlers
  const handleGuideClose = () => {
    setGuideState({ ...guideState, closing: true });

    const timeoutId = setTimeout(() => {
      setGuideState(zeroGuideState);
      clearTimeout(timeoutId);
    }, 150);
  };

  // Create and go to new event link
  const openNewEvent = (actionId) => {
    // 1. Ensure for calendar-link API
    const event = {
      title: eventMeta.title.trim(),
      start: alphaNumeric(eventMeta.start),
      end: alphaNumeric(eventMeta.end),
      location: eventMeta.location.trim(),
      description: eventMeta.description.trim(),
    };

    // 2. Generate URL for calendar
    const calendarUrl = (() => {
      if (actionId === 'google') return calLinkGoogle(event);
      if (actionId === 'yahoo') return calLinkYahoo(event);
      return '';
    })();

    // 3. Create a window for the URL
    window.open(calendarUrl, (new Date()).getTime());
  };

  const handleActionClick = (actionId) => {
    // URL-supported actions
    if (['google', 'yahoo'].includes(actionId)) {
      openNewEvent(actionId);
      return;
    }

    // Otherwise open guide to download .ics
    setGuideState({ ...guideState, open: true });
  };

  const handleCopy = ({ label, value }) => {
    copyService.copy(value)
      .then(() => pushSnack({
        variant: 'success',
        message: `Copied ${label}`,
      }))
      .catch((err) => {
        logger.error(err);
        pushSnack({
          variant: 'error',
          message: 'Something went wrong',
        });
      });
  };

  return (
    <AddToCalendar
      actions={actions}
      guideState={guideState}
      onGuideClose={handleGuideClose}
      onActionClick={handleActionClick}
      onCopy={handleCopy}
    />
  );
};

export default AddToCalendarContainer;
