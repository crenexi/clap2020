import React from 'react';
import PropTypes from 'prop-types';
import './HashtagsResult.scss';

const HashtagsResult = ({ baseTags, endTags }) => (
  <div styleName="result">
    <div styleName="result__tags">
      <div>{baseTags}</div>
      <div>{endTags}</div>
    </div>
  </div>
);

HashtagsResult.propTypes = {
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
};

export default HashtagsResult;
