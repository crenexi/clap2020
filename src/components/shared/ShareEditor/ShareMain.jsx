import React, { useState, useEffect } from 'react';
import useContent from 'hooks/use-content';
import { onlyAlpha } from 'utils/helpers';
import logger from 'services/logger';
import ShareMainView from './ShareMainView';

const ShareMain = () => {
  const { baseTags, shareNow: content } = useContent();
  const { topCities, unitedStates } = content;
  const defaultEndTag = '#USA';

  // Ensure cities data are supplied
  if (!baseTags || !topCities || !unitedStates) {
    logger.error('Data for ShareMain does not exist');
    return null;
  }

  // Data with alphabetical only
  const statesOnlyAlpha = unitedStates.map(state => onlyAlpha(state));
  const topCitiesOnlyAlpha = topCities.map(city => ({
    name: onlyAlpha(city.name),
    state: onlyAlpha(city.state),
  }));

  // State
  const [citiesMenu, setCitiesMenu] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [endTags, setEndTags] = useState('');

  /**
   * Updates the citiesMenu state
   */
  const updateCitiesMenu = () => {
    // If no state selected, use all cities
    if (!selectedState) {
      setCitiesMenu(topCitiesOnlyAlpha.map(c => c.name));
      return;
    }

    // Filter cities that match the selectedState
    const cities = topCitiesOnlyAlpha
      .filter(c => c.state === selectedState)
      .map(c => c.name);

    setCitiesMenu(cities);
  };

  /**
   * Updates the endTags state
   */
  const updateEndTags = () => {
    let updatedEndTags = defaultEndTag;

    if (selectedState) {
      // Determine resulting tags string, accounting for blanks
      const tags = [selectedState, selectedCity].filter(t => t);
      updatedEndTags = tags.reduce((tags, tag) => `#${tag} ${tags}`, '');
    }

    setEndTags(updatedEndTags);
  };

  // Initialization
  useEffect(() => updateCitiesMenu(), []);

  // Trigger updates based on selection changes
  useEffect(updateCitiesMenu, [selectedState]);
  useEffect(updateEndTags, [selectedCity, selectedState]);

  // Event: handle city selection
  const handleChangeCity = (city) => {
    setSelectedCity(city);

    if (city) {
      // Find state match to selected city
      const topCityMatch = topCitiesOnlyAlpha.find(c => c.name === city);

      // Ensure city was found in top cities
      if (!topCityMatch) {
        logger.error('Selected city not found in topCitiesOnlyAlpha');
        return;
      }

      // Ensure state found in states list
      if (statesOnlyAlpha.every(state => state !== topCityMatch.state)) {
        logger.error(`${city} in Top Cities has an invalid state`);
        return;
      }

      // State match found and valid
      setSelectedState(topCityMatch.state);
    }
  };

  // Event: handle state selection
  const handleChangeState = (state) => {
    setSelectedState(state);
    setSelectedCity('');
  };

  return (
    <ShareMainView
      statesMenu={statesOnlyAlpha}
      citiesMenu={citiesMenu}
      selectedCity={selectedCity}
      selectedState={selectedState}
      changeCity={handleChangeCity}
      changeState={handleChangeState}
      baseTags={baseTags}
      endTags={endTags}
    />
  );
};

export default ShareMain;
