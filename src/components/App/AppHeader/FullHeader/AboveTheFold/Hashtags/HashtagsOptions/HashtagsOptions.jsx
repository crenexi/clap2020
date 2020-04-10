import React from 'react';
import PropTypes from 'prop-types';
import useContent from 'hooks/use-content';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import './HashtagsOptions.scss';

const HashtagsOptions = (props) => {
  const { cityTag, stateTag, changeCityTag, changeStateTag } = props;
  const { locations } = useContent();
  const { topCities, states } = locations;

  // City dropdown
  const citySelect = (
    <CitySelect
      cities={topCities}
      value={cityTag}
      change={changeCityTag}
    />
  );

  // State dropdown
  const stateSelect = (
    <StateSelect
      states={states}
      value={stateTag}
      change={changeStateTag}
    />
  );

  return (
    <div styleName="options">
      <div styleName="options__item">{citySelect}</div>
      <div styleName="options__item">{stateSelect}</div>
    </div>
  );
};

HashtagsOptions.propTypes = {
  cityTag: PropTypes.string.isRequired,
  stateTag: PropTypes.string.isRequired,
  changeCityTag: PropTypes.func.isRequired,
  changeStateTag: PropTypes.func.isRequired,
};

export default HashtagsOptions;
