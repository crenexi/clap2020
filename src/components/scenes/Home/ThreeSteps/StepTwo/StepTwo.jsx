import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import Button from 'components/shared/Button';
import FBGroupPlugin from 'components/shared/@facebook/FBGroupPlugin';
import FBPagePlugin from 'components/shared/@facebook/FBPagePlugin';
import StepArea from '../StepArea';
import StepSection from '../StepSection';
import './StepTwo.scss';

const StepTwo = ({ theme }) => {
  // Content
  const calendarSubtitle = 'Add your own calendar reminder';
  const facebookSubtitle = 'Get notified & share stories';
  const eventUrl = 'https://www.facebook.com/events/217497266335496/';

  // Plugin width
  const isGtXs = useBreakpoint('gt-xs');
  const pluginWidth = !isGtXs ? 225 : 350;

  return (
    <div styleName="step">
      <StepArea title="Calendar" subtitle={calendarSubtitle}>
        <StepSection
          theme={theme}
          title="Add to Calendar"
          endIcon="calendar-plus"
        >
          Coming soon...
        </StepSection>
      </StepArea>
      <StepArea title="Facebook" subtitle={facebookSubtitle}>
        <StepSection
          theme={theme}
          title="View Event"
          endIcon="calendar-day"
        >
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
        </StepSection>
        <StepSection
          theme={theme}
          title="Join Group"
          endIcon="users"
        >
          <FBGroupPlugin width={pluginWidth} />
        </StepSection>
        <StepSection
          theme={theme}
          title="Follow Page"
          endIcon="thumbs-up"
        >
          <FBPagePlugin width={pluginWidth} />
        </StepSection>
      </StepArea>
    </div>
  );
};

StepTwo.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default StepTwo;
