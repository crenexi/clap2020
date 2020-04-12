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
    section: 'section',
    sectionHeading: 'section__heading',
    sectionMain: 'section__main',
    sectionItem: 'section__item',
  };

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
    <div styleName={sn.options}>
      <div styleName={sn.section}>
        <div styleName={sn.sectionHeading}>Poster Format</div>
        <div styleName={sn.sectionMain}>
          <div styleName={sn.sectionItem}>{posterSelect}</div>
        </div>
      </div>
      <div styleName={sn.section}>
        <div styleName={sn.sectionHeading}>Location Hashtags</div>
        <div styleName={sn.sectionMain}>
          <div styleName={sn.sectionItem}>
            {!statesMenu.length ? null : stateSelect}
          </div>
          <div styleName={sn.sectionItem}>
            {!citiesMenu.length ? null : citySelect}
          </div>
        </div>
      </div>
    </div>
  );
};

ShareOptions.propTypes = {
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default ShareOptions;
