import React from 'react';
import PropTypes from 'prop-types';
import posterSelectionType from '@types/poster-selection-type';
// import PosterIcon from '../PosterIcon';
// import PosterPreview from '../PosterPreview';
import './PosterSelect.scss';

const PosterSelect = (props) => {
  const { selection, onFormatChange } = props;

  const options = ['story', 'square', 'rectangle'].map(format => (
    <div
      styleName="select__option"
      key={format}
      onClick={() => onFormatChange(format)}
      onKeyDown={() => onFormatChange(format)}
      role="button"
      tabIndex="0"
    >
      {format}
      {/* <PosterIcon format={format} */}
    </div>
  ));

  return (
    <div styleName="frame">
      <div styleName="select">
        <div styleName="select__label">Label</div>
        <div styleName="select__options">{options}</div>
      </div>
      <div styleName="preview">
        {selection.format} | is blackwhite: {selection.isBlackWhite}
        {/* <PosterPreview /> */}
      </div>
    </div>
  );
};

PosterSelect.propTypes = {
  selection: posterSelectionType.isRequired,
  onFormatChange: PropTypes.func.isRequired,
};

export default PosterSelect;
