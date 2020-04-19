import React, { Fragment } from 'react';
import useContent from 'hooks/use-content';
import useBreakpoint from 'hooks/use-breakpoint';
import { userAgent } from 'utils/helpers';
import Countdown from 'components/shared/Countdown';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import TWTweet from 'components/shared/@twitter/TWTweet';
import StepSectionL1 from '../StepSectionL1';
import StepSectionL2 from '../StepSectionL2';
import NoiseMethods from './NoiseMethods';
import './Step3.scss';

const Step3 = () => {
  const isGtSm = useBreakpoint('gt-sm');
  const isMobile = userAgent.isMobile();

  // Content
  const { sceneContent, campaignContent } = useContent();
  const { featuredTweetId } = sceneContent.home.threeSteps;
  const tagsList = campaignContent.status.campaignTags.listExtended;
  const shareText = 'To all healthcare & essential workers, thank you!';

  // Twitter share
  const tweetUrl = (() => {
    const base = 'https://twitter.com/intent/tweet';
    const t = `text=${encodeURIComponent(shareText)}`;
    const h = `hashtags=${tagsList.join(',')}`;
    const v = 'via=Clap2020';
    return `${base}?${t}&${h}&${v}`;
  })();

  // Other share
  const handleShareClick = () => {
    // Fallback on the twitter option
    if (!navigator || !navigator.share) {
      window.open(tweetUrl, '_blank');
      return;
    }

    // Share API
    const text = `${shareText} ${tagsList.join(' #')}`;
    const url = 'https://www.clap2020.com';
    navigator.share({ text, url });
  };

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
        <Button click={handleShareClick}>
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

export default Step3;
