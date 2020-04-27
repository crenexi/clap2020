import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import Item from './Item';
import './TweetReel.scss';

const TweetReel = ({ items }) => (
  <div styleName="frame">
    <div styleName="reel">
      <div styleName="reel__items">
        {items.map(({ tweetId, location }) => (
          <Item key={tweetId} tweetId={tweetId} location={location} />
        ))}
      </div>
    </div>
  </div>
);

TweetReel.propTypes = {
  items: arrayOf(shape({
    tweetId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default TweetReel;
