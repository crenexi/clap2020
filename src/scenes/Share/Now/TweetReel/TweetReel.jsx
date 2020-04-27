import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import Section from '../../Section';
import Item from './Item';
import './TweetReel.scss';

const TweetReel = ({ items }) => {
  const reel = items.map(({ tweetId, location }) => (
    <Item key={tweetId} tweetId={tweetId} location={location} />
  ));

  return (
    <div styleName="frame">
      <Section inverted wide>
        <div styleName="reel">{reel}</div>
      </Section>
    </div>
  );
};

TweetReel.propTypes = {
  items: arrayOf(shape({
    tweetId: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })).isRequired,
};

export default TweetReel;
