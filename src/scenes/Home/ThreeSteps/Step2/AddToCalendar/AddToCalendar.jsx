import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import ICalGuide from './ICalGuide';
import CalendarActions from './CalendarActions';
import CalendarCopy from './CalendarCopy';
import './AddToCalendar.scss';

const AddToCalendar = (props) => {
  const {
    actions,
    guideState,
    onGuideClose,
    onActionClick,
    onCopy,
  } = props;

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
          <CalendarCopy onCopy={onCopy} />
        </div>
      </div>
      <div styleName={guideStyleName}>
        <ICalGuide onClose={onGuideClose} />
      </div>
    </div>
  );
};

AddToCalendar.propTypes = {
  actions: arrayOf(shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconPrefix: PropTypes.string.isRequired,
  })).isRequired,
  guideState: shape({
    open: PropTypes.bool.isRequired,
    closing: PropTypes.bool.isRequired,
  }).isRequired,
  onGuideClose: PropTypes.func.isRequired,
  onActionClick: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default AddToCalendar;
