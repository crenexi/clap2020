import React from 'react';
import useContent from 'hooks/use-content';
import useBreakpoint from 'hooks/use-breakpoint';
import Countdown from 'components/shared/Countdown';
import Button from 'components/shared/Button';
import TWTweet from 'components/shared/@twitter/TWTweet';
import StepSectionL1 from '../StepSectionL1';
// import NoiseMethods from './NoiseMethods';
import './Step3.scss';

const Step3 = () => {
  const { sceneContent } = useContent();
  const { featuredTweetId } = sceneContent.home.threeSteps;

  const isGtSm = useBreakpoint('gt-sm');

  const countdown = isGtSm ? null : (
    <div styleName="countdown">
      <Countdown />
    </div>
  );

  const noiseMethods = (
    <div styleName="noise-methods">
      Noise Methods...
      {/* <NoiseMethods /> */}
    </div>
  );

  const featuredTweet = (
    <div styleName="featured-tweet">
      <TWTweet id={featuredTweetId} options={{ hideCards: true }} />
    </div>
  );

  const countdownInvite = (
    <div styleName="countdown-invite">
      <Button
        variant="secondary"
        endIcon="arrow-circle-right"
        to="/get-ready"
      >
        Big Countdown
      </Button>
    </div>
  );

  return (
    <div styleName="step">
      <div styleName="step__section">
        {countdown}
        <StepSectionL1 title="Noise Methods" subtitle="How people are 'clapping' world-wide">
          {featuredTweet}
          {noiseMethods}
        </StepSectionL1>
      </div>
      <div styleName="step__section">
        {countdownInvite}
      </div>
    </div>
  );
};

export default Step3;
