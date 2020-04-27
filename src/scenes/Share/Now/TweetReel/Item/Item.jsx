import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from '@components/ui';
import { TWTweet } from '@components/embeds';
import './Item.scss';

const Item = ({ tweetId, location }) => {
  return (
    <div styleName="frame">
      <div styleName="location">
        <div styleName="location__icon">
          <FaIcon icon="globe-americas" />
        </div>
        <div styleName="location__text">{location}</div>
      </div>
      <div styleName="embed">
        <TWTweet
          id={tweetId}
          options={{
            hideConversation: true,
            hideCard: true,
          }}
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  tweetId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Item;
