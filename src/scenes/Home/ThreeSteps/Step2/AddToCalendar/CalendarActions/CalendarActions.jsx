import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import calendarActionType from '@types/calendar-action-type';
import { Button, FaIcon } from '@components/ui';
import './CalendarActions.scss';

const CalendarActions = ({ actions, click }) => (
  <div styleName="list">
    {actions.map(({ id, label, icon, iconPrefix }) => (
      <div styleName={`action action--${id}`} key={id}>
        <div styleName="btn">
          <Button size="small" click={() => click(id)}>
            {label}
          </Button>
        </div>
        <div styleName="icon">
          <FaIcon icon={icon} prefix={iconPrefix || 'fal'} />
        </div>
      </div>
    ))}
  </div>
);

CalendarActions.propTypes = {
  actions: arrayOf(calendarActionType).isRequired,
  click: PropTypes.func.isRequired,
};

export default CalendarActions;
