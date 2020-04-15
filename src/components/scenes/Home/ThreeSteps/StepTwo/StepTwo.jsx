import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from 'hooks/use-breakpoint';
import FBPagePlugin from 'components/shared/@facebook/FBPagePlugin';
import StepArea from '../StepArea';
import StepSection from '../StepSection';
import './StepTwo.scss';

const StepTwo = ({ theme }) => {
  const isGtXs = useBreakpoint('gt-xs');
  const pluginWidth = 250;

  const calendarSubtitle = 'Add your own calendar reminder';
  const facebookSubtitle = 'Get notified & share stories';

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
          Group Plugin
        </StepSection>
        <StepSection
          theme={theme}
          title="Follow Page"
          endIcon="thumbs-up"
        >
          <FBPagePlugin width={pluginWidth} withEvents={isGtXs} />
        </StepSection>
      </StepArea>
    </div>
  );
};

StepTwo.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default StepTwo;
