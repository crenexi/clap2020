import React, { Fragment } from 'react';
import theme from 'config/theme-config';
import DesignHeading from '../../DesignHeading';
import './Palette.scss';

const Palette = () => {
  const { paletteRows } = theme;

  return (
    <div styleName="palette">
      {paletteRows.map(({ title, colors }) => (
        <Fragment key={title}>
          <DesignHeading title={title} />
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
        </Fragment>
      ))}
    </div>
  );
};

export default Palette;
