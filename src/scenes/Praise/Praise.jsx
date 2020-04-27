import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Button, QuickNavBar } from '@components/ui';
import ThankYou from './ThankYou';
import Tweets from './Tweets';
import './Praise.scss';

const Praise = () => {
  const tweets = useSelector(s => s.scenes.praise.tweets);

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
  const praiseTweets = <Tweets tweets={tweets} />;

  return (
    <Fragment>
      <article styleName="praise">
        <section>
          <ThankYou />
        </section>
      </article>
      {quickNavBar}
      {praiseTweets}
    </Fragment>
  );
};

export default Praise;
