import React, { useState, useEffect } from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import { onlyAlpha } from 'utils/helpers';
import HashtagsView from './HashtagsView';

const Hashtags = (props) => {
  const { baseTags, topCities } = props;

  // State
  const [citiesMenu, setCitiesMenu] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [endTags, setEndTags] = useState('');

  const updateEndTags = () => {
    setEndTags(`#${selectedCity} #${selectedState}`);

    // Add stateTag by default if city selected
    // if (selectedCity && !selectedState) {
    //   const city = topCities.find(city => city.state === selectedState);
    //   setSelectedState(!city ? '' : city.state);
    // }
  };

  // Helper: updates city menu based on selectedState
  // const updateCitiesMenu = () => {
  //   const cityKey = city => onlyAlpha(city.name);

  //   // If no state selected, use all cities
  //   if (!selectedState) {
  //     setCitiesMenu(topCities.map(cityKey));
  //     return;
  //   }

  //   // Filter cities that match the active state
  //   const ofSelectedState = city => onlyAlpha(city.state) === selectedState;
  //   setCitiesMenu(topCities.filter(ofSelectedState).map(cityKey));
  // };

  // Update cities when state tag changes
  // useEffect(() => {
  //   updateCitiesMenu();
  // }, [selectedState]);

  // Event: handle cityTag change
  const handleChangeCity = (city) => {
    setSelectedCity(city);
    updateEndTags();
  };

  // Event: handle stateTag change
  const handleChangeState = (state) => {
    setSelectedCity('');
    setSelectedState(state);
    updateEndTags();
  };

  // Event: handle copying tags
  const handleCopyTags = () => {
    // base tags plus tags
  };

  return (
    <HashtagsView
      citiesMenu={citiesMenu}
      selectedCity={selectedCity}
      selectedState={selectedState}
      changeCity={handleChangeCity}
      changeState={handleChangeState}
      baseTags={baseTags}
      endTags={endTags}
      copyTags={handleCopyTags}
    />
  );
};

Hashtags.propTypes = {
  baseTags: PropTypes.string.isRequired,
  topCities: arrayOf(shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
};

export default Hashtags;
