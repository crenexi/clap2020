import React, { Fragment } from 'react';
import useContent from 'hooks/use-content';
import QuickNavBar from 'components/shared/QuickNavBar';
import ThankYou from 'components/shared/ThankYou';
import Button from 'components/shared/Button';
import PraiseTweets from './PraiseTweets';
import './Praise.scss';

const Praise = () => {
  const { sceneContent } = useContent();

  // Content
  const { tweets } = sceneContent.praise;

  const quickNavItems = [
    <Button
      to="/?scrollTo=threeSteps"
      variant="inverted"
      startIcon="arrow-circle-left"
    >
      3 Steps
    </Button>,
    <Button
      to="/share"
      variant="white"
      endIcon="arrow-circle-right"
    >
      Posters
    </Button>,
  ];

  const quickNavBar = <QuickNavBar items={quickNavItems} />;
  const praiseTweets = <PraiseTweets tweets={tweets} />;

  return (
    <Fragment>
      {quickNavBar}
      <article styleName="praise">
        <section><ThankYou /></section>
      </article>
      {quickNavBar}
      {praiseTweets}
    </Fragment>
  );
};

export default Praise;
