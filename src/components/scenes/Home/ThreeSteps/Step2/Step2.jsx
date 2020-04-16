import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import Button from 'components/shared/Button';
import FBGroupPlugin from 'components/shared/@facebook/FBGroupPlugin';
import FBPagePlugin from 'components/shared/@facebook/FBPagePlugin';
import StepSectionL1 from '../StepSectionL1';
import StepSectionL2 from '../StepSectionL2';
import AddToCalendar from './AddToCalendar';
import './Step2.scss';

const Step2 = ({ theme }) => {
  // Content
  const calendarSubtitle = 'Add your own calendar reminder';
  const facebookSubtitle = 'Get notified & share stories';
  const eventUrl = 'https://www.facebook.com/events/217497266335496/';

  // Plugin width
  const isGtXs = useBreakpoint('gt-xs');
  const pluginWidth = !isGtXs ? 225 : 350;

  const eventInvite = (
    <div styleName="event-invite">
      <div
        styleName="event-invite__btn"
        style={{ width: pluginWidth }}
      >
        <Button
          variant="secondary"
          endIcon="external-link"
          href={eventUrl}
          target="_blank"
        >
          Facebook Event
        </Button>
      </div>
    </div>
  );

  return (
    <div styleName="step">
      <StepSectionL1 title="Facebook" subtitle={facebookSubtitle}>
        <StepSectionL2
          theme={theme}
          title="View Event"
          endIcon="calendar-check"
        >
          {eventInvite}
        </StepSectionL2>
        <StepSectionL2
          theme={theme}
          title="Join Group"
          endIcon="users"
        >
          <FBGroupPlugin width={pluginWidth} />
        </StepSectionL2>
        <StepSectionL2
          theme={theme}
          title="Follow Page"
          endIcon="thumbs-up"
        >
          <FBPagePlugin width={pluginWidth} />
        </StepSectionL2>
      </StepSectionL1>
      <StepSectionL1 title="Calendar" subtitle={calendarSubtitle}>
        <StepSectionL2
          theme={theme}
          title="Add to Calendar"
          endIcon="calendar-plus"
        >
          <AddToCalendar />
        </StepSectionL2>
      </StepSectionL1>
    </div>
  );
};

Step2.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Step2;
