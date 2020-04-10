import React from 'react';
import PropTypes from 'prop-types';
import './HashtagsResult.scss';

const HashtagsResult = ({ tags }) => (
  <div styleName="result">
    <div styleName="result__tags">{tags}</div>
  </div>
);

HashtagsResult.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default HashtagsResult;
