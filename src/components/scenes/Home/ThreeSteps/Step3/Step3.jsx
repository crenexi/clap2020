import React from 'react';
import useContent from 'hooks/use-content';
import useBreakpoint from 'hooks/use-breakpoint';
import Countdown from 'components/shared/Countdown';
import Button from 'components/shared/Button';
import TWTweet from 'components/shared/@twitter/TWTweet';
import StepSectionL1 from '../StepSectionL1';
import NoiseMethods from './NoiseMethods';
import './Step3.scss';

const Step3 = () => {
  const isGtSm = useBreakpoint('gt-sm');

  // Content
  const { sceneContent } = useContent();
  const { featuredTweetId } = sceneContent.home.threeSteps;

  const featuredTweets = (
    <TWTweet id={featuredTweetId} options={{ hideCards: true }} />
  );

  const countdownInvite = (
    <Button
      variant="secondary"
      endIcon="arrow-circle-right"
      to="/get-ready"
    >
      Large Countdown
    </Button>
  );

  return (
    <div styleName="step">
      <div styleName="main">
        <div styleName="main__section">
          <div styleName="featured-tweets">{featuredTweets}</div>
        </div>
        <div styleName="main__section">
          <StepSectionL1
            title="Noise Methods"
            subtitle="How people bring the thunder"
          >
            <div styleName="noise-methods">
              <NoiseMethods />
            </div>
          </StepSectionL1>
        </div>
      </div>
      <div styleName="countdown-frame">
        <StepSectionL1
          title="Countdown"
          subtitle="Be ready to join the moment"
          keepOpen
        >
          <div styleName="countdown-invite">
            {isGtSm ? null : <Countdown />}
            <div styleName="countdown-invite__btn">{countdownInvite}</div>
          </div>
        </StepSectionL1>
      </div>
    </div>
  );
};

export default Step3;
