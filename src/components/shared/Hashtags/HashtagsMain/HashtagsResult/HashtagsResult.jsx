import React from 'react';
import PropTypes from 'prop-types';
import './HashtagsResult.scss';

const HashtagsResult = ({ baseTags, endTags }) => (
  <div styleName="result">
    <div styleName="poster">
      <div styleName="poster__preview">
        Poster
      </div>
    </div>
    <div styleName="tags">
      <div styleName="tags__base">{baseTags}</div>
      <div styleName="tags__end">{endTags}</div>
    </div>
  </div>
);

HashtagsResult.propTypes = {
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
};

export default HashtagsResult;
