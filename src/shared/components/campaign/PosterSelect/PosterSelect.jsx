import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import posterSelectionType from '@types/poster-selection-type';
import PosterIcon from '../PosterIcon';
import PosterPreview from '../PosterPreview';
import './PosterSelect.scss';

const PosterSelect = (props) => {
  const { selection, onChange } = props;

  const options = ['story', 'square', 'rectangle'].map((format) => {
    const styleName = classNames('option', {
      'option--selected': selection.format === format,
    });

    return (
      <div
        role="button"
        tabIndex="0"
        styleName={styleName}
        key={format}
        onClick={() => onChange({ format })}
        onKeyDown={() => onChange({ format })}
      >
        <PosterIcon format={format} />
        <div styleName="option__label">{format}</div>
      </div>
    );
  });

  return (
    <div styleName="frame">
      <div styleName="options">{options}</div>
      <div styleName="preview">
        <div styleName="preview__label">Preview</div>
        <PosterPreview
          format={selection.format}
          isBlackWhite={selection.isBlackWhite}
        />
      </div>
    </div>
  );
};

PosterSelect.propTypes = {
  selection: posterSelectionType.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PosterSelect;
