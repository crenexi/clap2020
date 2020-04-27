import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoint from '@hooks/use-breakpoint';
import { userAgent } from '@helpers';
import { Button, FaIcon } from '@components/ui';
import { Countdown } from '@components/campaign';
import { TWTweet } from '@components/embeds';
import StepSectionL1 from '../StepSectionL1';
import StepSectionL2 from '../StepSectionL2';
import NoiseMethods from './NoiseMethods';
import './Step3.scss';

const Step3 = (props) => {
  const { featuredTweetId, tweetUrl, onShareClick } = props;

  const isGtSm = useBreakpoint('gt-sm');
  const isMobile = userAgent.isMobile();

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

  const shareButtons = (
    <div styleName="share-buttons">
      <Button variant="primary" href={tweetUrl} target="_blank">
        #ThankYou Workers
        <div styleName="share-buttons__icon">
          <FaIcon icon="twitter" prefix="fab" />
        </div>
      </Button>
      {isMobile && (
        <Button click={onShareClick}>
          #ThankYou Workers
          <div styleName="share-buttons__icon">
            <FaIcon icon="share-alt" />
          </div>
        </Button>
      )}
    </div>
  );

  return (
    <div styleName="step">
      <div styleName="main">
        <div styleName="main__section">
          <div styleName="featured-tweets">{featuredTweets}</div>
          <StepSectionL2
            title="Share during/after event"
            endIcon="house-user"
          >
            {shareButtons}
          </StepSectionL2>
        </div>
        <div styleName="main__section">
          <StepSectionL1
            title="Bring the Thunder"
            subtitle="How people are 'clapping' across the world"
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

Step3.propTypes = {
  featuredTweetId: PropTypes.string.isRequired,
  tweetUrl: PropTypes.string.isRequired,
  onShareClick: PropTypes.func.isRequired,
};

export default Step3;
