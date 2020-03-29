import React from 'react';
import theme from 'config/theme-config';
import './Palette.scss';

const Palette = () => {
  const { paletteRows } = theme;

  return (
    <div styleName="palette">
      {paletteRows.map(({ title, colors }) => (
        <div styleName="palette__row" key={title}>
          <h4 styleName="palette__title">{title}</h4>
          <div styleName="palette__colors">
            {colors.map(color => (
              <div styleName="palette__color" key={color}>
                <div styleName="palette__color-label">{color}</div>
                <div
                  styleName="palette__color-box"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Palette;
