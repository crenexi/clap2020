import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './PosterSelect.scss';

const PosterSelect = ({ value, change }) => {
  const posterFormats = ['story', 'square', 'rectangle'];

  // Event: if included, set to selected format; otherwise, empty string
  const handleInclude = (event) => {
    change(event.target.checked ? 'square' : '');
  };

  // Use square as initial value

  const includeSwitch = (
    <Switch
      checked={!!value}
      onChange={handleInclude}
      name="included"
    />
  );

  const formats = posterFormats.map((format) => {
    const styleName = classNames('main__format', {
      'main__format--selected': format === value,
    });

    const shapeStyleName = (() => {
      const base = 'main__format-shape';
      return `${base} ${base}--${format}`;
    })();

    return (
      <div
        role="button"
        tabIndex="0"
        styleName={styleName}
        key={format}
        onClick={() => change(format)}
        onKeyDown={() => change(format)}
      >
        <div styleName={shapeStyleName} />
        <div styleName="main__format-label">{format}</div>
      </div>
    );
  });

  return (
    <div styleName="select-frame">
      <div styleName="include-toggle">
        <FormControlLabel control={includeSwitch} label="Include Poster" />
      </div>
      <div styleName={value ? 'main' : `main main--disabled`}>
        <div styleName="main__formats">{formats}</div>
      </div>
    </div>
  );
};

PosterSelect.propTypes = {
  value: PropTypes.oneOf(['', 'story', 'square', 'rectangle']).isRequired,
  change: PropTypes.func.isRequired,
};

export default PosterSelect;
