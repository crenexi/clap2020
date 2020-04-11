import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import ShareResult from './ShareResult';
import ShareOptions from './ShareOptions';
import './ShareMainView.scss';

const ShareMainView = (props) => {
  const { statesMenu, citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState } = props;
  const { baseTags, endTags } = props;

  return (
    <div styleName="main">
      <div styleName="main__result">
        <ShareResult baseTags={baseTags} endTags={endTags} />
      </div>
      <div styleName="main__options">
        <ShareOptions
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

ShareMainView.propTypes = {
  statesMenu: arrayOf(PropTypes.string).isRequired,
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
};

export default ShareMainView;
