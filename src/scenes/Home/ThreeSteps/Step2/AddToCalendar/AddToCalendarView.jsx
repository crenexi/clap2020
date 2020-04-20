import React from 'react';
import PropTypes, { shape } from 'prop-types';
import classNames from 'classnames';
import eventMetaType from 'types/event-meta';
import ICalGuide from './ICalGuide';
import CalendarActions from './CalendarActions';
import CalendarCopy from './CalendarCopy';
import './AddToCalendarView.scss';

const AddToCalendarView = (props) => {
  const {
    eventMeta,
    icsUrl,
    guideState,
    onGuideClose,
    onActionClick,
    onCopy,
  } = props;

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

  const guideStyleName = classNames('guide', {
    'guide--open': guideState.open,
    'guide--closing': guideState.closing,
  });

  return (
    <div styleName="frame">
      <div styleName="main">
        <div styleName="main__section">
          <CalendarActions actions={actions} click={onActionClick} />
        </div>
        <div styleName="main__section">
          <CalendarCopy eventMeta={eventMeta} onCopy={onCopy} />
        </div>
      </div>
      <div styleName={guideStyleName}>
        <ICalGuide icsUrl={icsUrl} onClose={onGuideClose} />
      </div>
    </div>
  );
};

AddToCalendarView.propTypes = {
  eventMeta: eventMetaType.isRequired,
  icsUrl: PropTypes.string.isRequired,
  guideState: shape({
    open: PropTypes.bool.isRequired,
    closing: PropTypes.bool.isRequired,
  }).isRequired,
  onGuideClose: PropTypes.func.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default AddToCalendarView;
