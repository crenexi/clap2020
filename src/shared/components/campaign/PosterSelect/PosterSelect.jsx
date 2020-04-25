import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import posterSelectionType from '@types/poster-selection-type';
import { capitalize } from '@helpers';
import PosterIcon from '../PosterIcon';
import PosterPreview from '../PosterPreview';
import './PosterSelect.scss';

const PosterSelect = (props) => {
  const { selection, onChange } = props;

  // Simple options
  const formatsData = ['story', 'square', 'rectangle'];
  const qualitiesData = ['standard', 'high-def', 'black/white'];

  // Formats markup
  const formats = formatsData.map((format) => {
    const styleName = classNames('format', {
      'format--selected': selection.format === format,
    });

    return (
      <div
        role="button"
        tabIndex="0"
        key={format}
        styleName={styleName}
        onClick={() => onChange({ format })}
        onKeyDown={() => onChange({ format })}
      >
        <PosterIcon format={format} />
        <div styleName="format__label">{format}</div>
      </div>
    );
  });

  // Qualities markup
  const qualityRadios = qualitiesData.map(quality => (
    <FormControlLabel
      key={quality}
      value={quality}
      control={<Radio />}
      label={capitalize(quality)}
    />
  ));

  return (
    <div styleName="frame">
      <div styleName="formats">{formats}</div>
      <div styleName="qualities">
        <RadioGroup
          name="quality"
          value={selection.quality}
          onChange={e => onChange({ quality: e.target.value })}
        >
          {qualityRadios}
        </RadioGroup>
      </div>
      <div styleName="preview">
        <div styleName="preview__label">Preview</div>
        <PosterPreview
          format={selection.format}
          quality={selection.quality}
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
