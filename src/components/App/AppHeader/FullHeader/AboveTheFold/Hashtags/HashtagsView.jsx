import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import HashtagsResult from './HashtagsResult';
import HashtagsActions from './HashtagsActions';
import HashtagsOptions from './HashtagsOptions';
import './HashtagsView.scss';

const HashtagsView = (props) => {
  const { citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState, copyTags } = props;
  const { baseTags, endTags } = props;

  return (
    <div styleName="hashtags">
      <div styleName="hashtags__result">
        <HashtagsResult baseTags={baseTags} endTags={endTags} />
        <HashtagsActions copyTags={copyTags} />
      </div>
      <div styleName="hashtags__options">
        <HashtagsOptions
          citiesMenu={citiesMenu}
          selectedCity={selectedCity}
          selectedState={selectedState}
          changeCity={changeCity}
          changeState={changeState}
        />
      </div>
    </div>
  );
};

HashtagsView.propTypes = {
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
  copyTags: PropTypes.func.isRequired,
};

export default HashtagsView;
