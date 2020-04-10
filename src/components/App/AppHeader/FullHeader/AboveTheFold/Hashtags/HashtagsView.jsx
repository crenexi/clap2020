import React from 'react';
import PropTypes from 'prop-types';
import HashtagsResult from './HashtagsResult';
import HashtagsActions from './HashtagsActions';
import HashtagsOptions from './HashtagsOptions';
import './HashtagsView.scss';

const HashtagsView = (props) => {
  const { tags, cityTag, stateTag } = props;
  const { changeCityTag, changeStateTag, copyTags } = props;

  return (
    <div styleName="hashtags">
      <div styleName="hashtags__result">
        <HashtagsResult tags={tags} />
        <HashtagsActions copyTags={copyTags} />
      </div>
      <div styleName="hashtags__options">
        <HashtagsOptions
          cityTag={cityTag}
          stateTag={stateTag}
          changeCityTag={changeCityTag}
          changeStateTag={changeStateTag}
        />
      </div>
    </div>
  );
};

HashtagsView.propTypes = {
  tags: PropTypes.string.isRequired,
  cityTag: PropTypes.string.isRequired,
  stateTag: PropTypes.string.isRequired,
  changeCityTag: PropTypes.func.isRequired,
  changeStateTag: PropTypes.func.isRequired,
  copyTags: PropTypes.func.isRequired,
};

export default HashtagsView;
