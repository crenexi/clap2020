import React from 'react';
import { useSelector } from 'react-redux';
import Step3 from './Step3';

const Step3Container = () => {
  const {
    featuredTweetId,
    tagsListExtended,
    tagsMessage,
  } = useSelector(s => ({
    featuredTweetId: s.scenes.home.threeSteps.featuredTweetId,
    tagsMessage: s.campaign.tags.messaage,
    tagsListExtended: s.campaign.tags.listExtended,
  }));

  // Twitter share
  const tweetUrl = (() => {
    const base = 'https://twitter.com/intent/tweet';
    const t = `text=${encodeURIComponent(tagsMessage)}`;
    const h = `hashtags=${tagsListExtended.join(',')}`;
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
    const text = `${tagsMessage} ${tagsListExtended.join(' #')}`;
    const url = 'https://www.clap2020.com';
    navigator.share({ text, url });
  };

  return (
    <Step3
      featuredTweetId={featuredTweetId}
      tweetUrl={tweetUrl}
      onShareClick={handleShareClick}
    />
  );
};

export default Step3Container;
