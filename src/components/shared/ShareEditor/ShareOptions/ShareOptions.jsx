import React from 'react';
import shareEditorOptionsType from 'types/share-editor-options';
import shareEditorActionsType from 'types/share-editor-actions';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import './ShareOptions.scss';

const ShareOptions = ({ options, actions }) => {
  const { statesMenu, citiesMenu } = options;
  const { selectedPoster, selectedCity, selectedState } = options;
  const { changePoster, changeCity, changeState } = actions;

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

ShareOptions.propTypes = {
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default ShareOptions;
