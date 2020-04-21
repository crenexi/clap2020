import React from 'react';
import { arrayOf } from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import praiseTweetType from '@types/praise-tweet';
import FaIcon from '@components/shared/FaIcon';
import './PraiseTweets.scss';

const PraiseTweets = ({ tweets }) => {
  return (
    <div styleName="tweets">
      <div styleName="tweets__header">
        <h4>Featured Tweets</h4>
      </div>
      <div styleName="tweets__list">
        {tweets.map(({ id, location }) => (
          <article styleName="tweets__item" key={id}>
            <div styleName="tweets__item-header">
              <div styleName="tweets__location">
                <FaIcon icon="globe" />
                &nbsp;{location}
              </div>
            </div>
            <div styleName="tweets__embed">
              <TwitterTweetEmbed tweetId={id} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

PraiseTweets.propTypes = {
  tweets: arrayOf(praiseTweetType).isRequired,
};

export default PraiseTweets;
