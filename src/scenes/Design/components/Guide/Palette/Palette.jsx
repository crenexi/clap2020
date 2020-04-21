import React, { Fragment } from 'react';
import theme from 'config/app-theme';
import Heading from '../../Heading';
import './Palette.scss';

const Palette = () => {
  const { paletteRows } = theme;

  return (
    <div styleName="palette">
      {paletteRows.map(({ title, colors }) => (
        <Fragment key={title}>
          <Heading title={title} />
          <div styleName="colors">
            {colors.map(color => (
              <div styleName="color" key={color}>
                <div styleName="color-label">{color}</div>
                <div
                  styleName="color-box"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Palette;
