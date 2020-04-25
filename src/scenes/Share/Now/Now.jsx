import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from '../Hero';
import TweetReel from './TweetReel';
import QuickShare from './QuickShare';
import QuickTweet from './QuickTweet';
import DialogInvite from './DialogInvite';
import EndQuote from './EndQuote';
import './Now.scss';

const Now = ({ heroCoverUrl }) => {
  const featuredQuote = useSelector((s) => {
    return s.scenes.share.social.featuredQuote;
  });

  return (
    <div styleName="frame">
      <Hero
        url={heroCoverUrl}
        imagePosition="0% 30%"
        title="POST"
        subtitle="hashtags &amp; posters"
      />
      <DialogInvite />
      <QuickShare />
      <TweetReel />
      <QuickTweet />
      <EndQuote featuredQuote={featuredQuote} />
    </div>
  );
};

Now.propTypes = {
  heroCoverUrl: PropTypes.string.isRequired,
};

export default Now;
