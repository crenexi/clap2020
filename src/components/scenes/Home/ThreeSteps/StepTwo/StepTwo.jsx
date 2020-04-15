import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import FBGroupPlugin from 'components/shared/@facebook/FBGroupPlugin';
import FBPagePlugin from 'components/shared/@facebook/FBPagePlugin';
import StepArea from '../StepArea';
import StepSection from '../StepSection';
import './StepTwo.scss';

const StepTwo = ({ theme }) => {
  // Content
  const calendarSubtitle = 'Add your own calendar reminder';
  const facebookSubtitle = 'Get notified & share stories';

  // Plugin width
  const isGtXs = useBreakpoint('gt-xs');
  const pluginWidth = !isGtXs ? 225 : 350;

  return (
    <div styleName="step">
      <StepArea title="Calendar" subtitle={calendarSubtitle}>
        Calendar Body
      </StepArea>
      <StepArea title="Facebook" subtitle={facebookSubtitle}>
        <StepSection
          theme={theme}
          title="View Event"
          endIcon="calendar-day"
        >
          Post Plugin
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
