import React from 'react';
import PropTypes from 'prop-types';
import eventMetaType from 'types/event-meta';
import CalendarActions from './CalendarActions';
import CalendarCopy from './CalendarCopy';
import './AddToCalendarView.scss';

const AddToCalendarView = (props) => {
  const { eventMeta, onActionClick, onCopy } = props;

  const actions = [
    {
      id: 'google',
      label: 'Google Calendar',
      icon: 'google',
      iconPrefix: 'fab',
    },
    {
      id: 'apple',
      label: 'Apple Calendar',
      icon: 'apple',
      iconPrefix: 'fab',
    },
    {
      id: 'yahoo',
      label: 'Yahoo Calendar',
      icon: 'yahoo',
      iconPrefix: 'fab',
    },
    {
      id: 'other',
      label: 'Other (.ICS File)',
      icon: 'file-download',
    },
  ];

  return (
    <div styleName="frame">
      <div styleName="section">
        <CalendarActions actions={actions} click={onActionClick} />
      </div>
      <div styleName="section">
        <CalendarCopy eventMeta={eventMeta} onCopy={onCopy} />
      </div>
    </div>
  );
};

AddToCalendarView.propTypes = {
  eventMeta: eventMetaType.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default AddToCalendarView;
