import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import calendarActionType from 'types/calendar-action';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './CalendarActions.scss';

const CalendarActions = ({ actions, click }) => {
  const list = actions.map(({ id, label, icon, iconPrefix }) => (
    <div styleName={`action action--${id}`} key={id}>
      <div styleName="action__icon">
        <FaIcon icon={icon} prefix={iconPrefix || 'fal'} />
      </div>
      <div styleName="action__btn">
        <Button size="small" click={() => click(id)}>
          {label}
        </Button>
      </div>
    </div>
  ));

  return <div styleName="list">{list}</div>;
};

CalendarActions.propTypes = {
  actions: arrayOf(calendarActionType).isRequired,
  click: PropTypes.func.isRequired,
};

export default CalendarActions;
