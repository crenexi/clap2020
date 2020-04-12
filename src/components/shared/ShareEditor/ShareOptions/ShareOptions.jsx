import React from 'react';
import shareEditorOptionsType from 'types/share-editor-options';
import shareEditorActionsType from 'types/share-editor-actions';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import PosterSelect from './PosterSelect';
import './ShareOptions.scss';

const ShareOptions = ({ options, actions }) => {
  const { statesMenu, citiesMenu } = options;
  const { selectedPoster, selectedCity, selectedState } = options;
  const { changePoster, changeCity, changeState } = actions;

  const sn = {
    options: 'options',
    item: 'item',
  };

  // State dropdown
  const stateSelect = !statesMenu.length ? null : (
    <div styleName={sn.optionsItem}>
      <StateSelect
        menu={statesMenu}
        value={selectedState}
        change={changeState}
      />
    </div>
  );

  // City dropdown
  const citySelect = !citiesMenu.length ? null : (
    <div styleName={sn.optionsItem}>
      <CitySelect
        menu={citiesMenu}
        value={selectedCity}
        change={changeCity}
      />
    </div>
  );

  // Poster selection
  const posterSelect = (
    <div stylename={sn.optionsItem}>
      <PosterSelect value={selectedPoster} change={changePoster} />
    </div>
  );

  return (
    <div styleName={sn.options}>
      {stateSelect}
      {citySelect}
      {posterSelect}
    </div>
  );
};

ShareOptions.propTypes = {
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default ShareOptions;
