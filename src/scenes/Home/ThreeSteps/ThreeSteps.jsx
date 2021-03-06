import React from 'react';
import * as Scroll from 'react-scroll';
import scssVars from '@helpers/scss/exports';
import StepFrame from './StepFrame';
import StepHeader from './StepHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './ThreeSteps.scss';

const ThreeSteps = () => {
  const ScrollElement = Scroll.Element;

  // Row color theme
  const shareTheme = scssVars.themeOceanLight2;
  const remindTheme = scssVars.themeBlueRoseLight1;
  const clapTheme = scssVars.themeRedRoseLight1;

  return (
    <ScrollElement styleName="three" name="threeSteps">
      <div styleName="main">
        <div styleName="steps">
          <StepFrame step={1} theme={shareTheme}>
            <StepHeader
              title="Share"
              icon="hashtag"
              theme={shareTheme}
            />
            <Step1 />
          </StepFrame>
          <StepFrame step={2} theme={remindTheme}>
            <StepHeader
              title="Remind"
              icon="calendar-day"
              theme={remindTheme}
            />
            <Step2 />
          </StepFrame>
          <StepFrame step={3} theme={clapTheme}>
            <StepHeader
              title="Clap"
              icon="hands-heart"
              theme={clapTheme}
            />
            <Step3 />
          </StepFrame>
        </div>
      </div>
    </ScrollElement>
  );
};

export default ThreeSteps;
