import React from 'react';
import { arrayOf } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import praiseTweetType from '@types/praise-tweet-type';
import { FaIcon } from '@components/ui';
import './Tweets.scss';

const Tweets = ({ tweets }) => (
  <div styleName="tweets">
    <div styleName="header">
      <h4>Featured Tweets</h4>
    </div>
    <div styleName="list">
      {tweets.map(({ id, location }) => (
        <article styleName="item" key={id}>
          <div styleName="item-header">
            <div styleName="location">
              <FaIcon icon="globe" />
              &nbsp;{location}
            </div>
          </div>
          <div styleName="embed">
            <TwitterTweetEmbed tweetId={id} />
          </div>
        </article>
      ))}
    </div>
  </div>
);

Tweets.propTypes = {
  tweets: arrayOf(praiseTweetType).isRequired,
};

export default Tweets;
