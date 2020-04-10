import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import HashtagsResult from './HashtagsResult';
import HashtagsActions from './HashtagsActions';
import HashtagsOptions from './HashtagsOptions';
import './HashtagsMainView.scss';

const HashtagsMainView = (props) => {
  const { statesMenu, citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState, copyTags } = props;
  const { baseTags, endTags } = props;

  return (
    <div styleName="main">
      <div styleName="main__result">
        <HashtagsResult baseTags={baseTags} endTags={endTags} />
        <HashtagsActions copyTags={copyTags} />
      </div>
      <div styleName="main__options">
        <HashtagsOptions
          statesMenu={statesMenu}
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

HashtagsMainView.propTypes = {
  statesMenu: arrayOf(PropTypes.string).isRequired,
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
  copyTags: PropTypes.func.isRequired,
};

export default HashtagsMainView;
