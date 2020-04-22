import React from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import { FaIcon } from '@components/ui';
import uniqueId from 'lodash.uniqueid';
import './IconParade.scss';

const IconParade = ({ icons }) => {
  const iconsView = (
    <div styleName="icons">
      {icons.map(({ key, color }) => (
        <div styleName="icon" key={uniqueId()} style={{ color }}>
          <FaIcon icon={key} />
        </div>
      ))}
    </div>
  );

  return (
    <div styleName="parade">
      <div styleName="sections">
        <div styleName="section">
          {iconsView}
        </div>
        <div styleName="section">
          {iconsView}
        </div>
      </div>
    </div>
  );
};

IconParade.propTypes = {
  icons: arrayOf(shape({
    key: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

export default IconParade;
