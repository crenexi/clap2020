import React from 'react';
import { useSelector } from 'react-redux';
import useBreakpoint from '@hooks/use-breakpoint';
import { Button } from '@components/ui';
import { FBGroupPlugin, FBPagePlugin } from '@components/embeds';
import StepSectionL1 from '../StepSectionL1';
import StepSectionL2 from '../StepSectionL2';
import AddToCalendar from './AddToCalendar';
import EmailEvent from './EmailEvent';
import './Step2.scss';

const Step2 = () => {
  const fbUrl = useSelector(s => s.campaign.status.nextEvent.fbUrl);

  // Static content
  const calendarSubtitle = 'Add your own calendar reminder';
  const facebookSubtitle = 'Get notified & share stories';

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
          href={fbUrl}
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
        <StepSectionL2 title="View Event" endIcon="calendar-check">
          {eventInvite}
        </StepSectionL2>
        <StepSectionL2
          title="Join Group"
          endIcon="users"
        >
          <FBGroupPlugin width={pluginWidth} />
        </StepSectionL2>
        <StepSectionL2 title="Follow Page" endIcon="thumbs-up">
          <FBPagePlugin width={pluginWidth} />
        </StepSectionL2>
      </StepSectionL1>
      <StepSectionL1 title="Calendar" subtitle={calendarSubtitle}>
        <StepSectionL2 title="Add to Calendar" endIcon="calendar-plus">
          <AddToCalendar />
        </StepSectionL2>
        <StepSectionL2 title="Email Event" endIcon="envelope">
          <EmailEvent />
        </StepSectionL2>
      </StepSectionL1>
    </div>
  );
};

export default Step2;
