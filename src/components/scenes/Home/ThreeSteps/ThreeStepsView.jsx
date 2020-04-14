import React from 'react';
import * as Scroll from 'react-scroll';
import scssVars from 'scss/utils/exports';
import ThreeStepsRow from './ThreeStepsRow';
import ThreeStepsHeading from './ThreeStepsHeading';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './ThreeStepsView.scss';

const ThreeStepsView = () => {
  const ScrollElement = Scroll.Element;

  // Row color theme
  const shareTheme = scssVars.themeOceanLight2;
  const remindTheme = scssVars.themeBlueRoseLight1;
  const clapTheme = scssVars.themeRedRoseLight1;

  return (
    <ScrollElement styleName="three" name="threeSteps">
      <div styleName="three__main">
        <div styleName="three__steps">
          <ThreeStepsRow step={1} theme={shareTheme}>
            <ThreeStepsHeading
              title="Share"
              icon="hashtag"
              theme={shareTheme}
            />
            <StepOne />
          </ThreeStepsRow>
          <ThreeStepsRow step={2} theme={remindTheme}>
            <ThreeStepsHeading
              title="Remind"
              icon="calendar-plus"
              theme={remindTheme}
            />
            <StepTwo />
          </ThreeStepsRow>
          <ThreeStepsRow step={3} theme={clapTheme}>
            <ThreeStepsHeading
              title="Clap"
              icon="hands-heart"
              theme={clapTheme}
            />
            <StepThree />
          </ThreeStepsRow>
        </div>
      </div>
    </ScrollElement>
  );
};

export default ThreeStepsView;
