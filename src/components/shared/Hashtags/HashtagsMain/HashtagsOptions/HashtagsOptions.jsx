import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import './HashtagsOptions.scss';

const HashtagsOptions = (props) => {
  const { statesMenu, citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState } = props;

  // State dropdown
  const stateSelect = !statesMenu.length ? null : (
    <div styleName="options__item">
      <StateSelect
        menu={statesMenu}
        value={selectedState}
        change={changeState}
      />
    </div>
  );

  // City dropdown
  const citySelect = !citiesMenu.length ? null : (
    <div styleName="options__item">
      <CitySelect
        menu={citiesMenu}
        value={selectedCity}
        change={changeCity}
      />
    </div>
  );

  return (
    <div styleName="options">
      {stateSelect}
      {citySelect}
    </div>
  );
};

HashtagsOptions.propTypes = {
  statesMenu: arrayOf(PropTypes.string).isRequired,
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default HashtagsOptions;
