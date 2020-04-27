import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

const Item = ({ tweetId, location }) => {
  return (
    <div styleName="frame">
      {tweetId} - {location}
    </div>
  );
};

Item.propTypes = {
  tweetId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Item;
