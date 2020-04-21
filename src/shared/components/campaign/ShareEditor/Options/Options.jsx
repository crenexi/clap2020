import React from 'react';
import shareEditorOptionsType from '@types/share-editor-options-type';
import shareEditorActionsType from '@types/share-editor-actions-type';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import PosterSelect from './PosterSelect';
import './Options.scss';

const Options = ({ options, actions }) => {
  const { statesMenu, citiesMenu } = options;
  const { selectedPoster, selectedCity, selectedState } = options;
  const { changePoster, changeCity, changeState } = actions;

  // State dropdown
  const stateSelect = (
    <StateSelect
      menu={statesMenu}
      value={selectedState}
      change={changeState}
    />
  );

  // City dropdown
  const citySelect = (
    <CitySelect
      menu={citiesMenu}
      value={selectedCity}
      change={changeCity}
    />
  );

  // Poster selection
  const posterSelect = (
    <PosterSelect value={selectedPoster} change={changePoster} />
  );

  return (
    <div styleName="options">
      <div styleName="section">
        <div styleName="section__heading">Poster Format</div>
        <div styleName="section__main">{posterSelect}</div>
      </div>
      <div styleName="section">
        <div styleName="section__heading">Location Hashtags</div>
        <div styleName="section__main">
          <div styleName="section__row">
            {!statesMenu.length ? null : stateSelect}
            {!citiesMenu.length ? null : citySelect}
          </div>
        </div>
      </div>
    </div>
  );
};

Options.propTypes = {
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default Options;
