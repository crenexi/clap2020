import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import SharePreview from './SharePreview';
import ShareOptions from './ShareOptions';
import './ShareEditorView.scss';

const ShareEditorView = (props) => {
  const { statesMenu, citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState } = props;
  const { baseTags, endTags } = props;

  return (
    <div styleName="editor">
      <div styleName="editor__result">
        <SharePreview baseTags={baseTags} endTags={endTags} />
      </div>
      <div styleName="editor__options">
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

ShareEditorView.propTypes = {
  statesMenu: arrayOf(PropTypes.string).isRequired,
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
};

export default ShareEditorView;
