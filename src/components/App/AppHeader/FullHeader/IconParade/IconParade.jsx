import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import times from 'lodash.times';
import flatten from 'lodash.flatten';
import uniqueId from 'lodash.uniqueid';
import scssVars from 'scss/utils/exports';
import './IconParade.scss';

const IconParade = () => {
  const icons = [
    { icon: 'user-nurse', color: scssVars.themeMarineDark2 },
    { icon: 'hospital', color: scssVars.themeBlueRoseLight2 },
    { icon: 'user-md', color: scssVars.themeMarineDark2 },
    { icon: 'ambulance', color: scssVars.themeRedRoseLight2 },
    { icon: 'hospitals', color: scssVars.themeBlueRoseLight2 },
  ];

  // Multiply array to get longer list
  const manyIcons = flatten(times(10, () => icons));

  // Icons row JSX
  const iconsView = (
    <div styleName="parade__icons">
      {manyIcons.map(({ icon, color }) => (
        <div styleName="parade__icon" key={uniqueId()} style={{ color }}>
          <FaIcon icon={icon} />
        </div>
      ))}
    </div>
  );

  return (
    <div styleName="parade">
      <div styleName="parade__sections">
        <div styleName="parade__section">
          {iconsView}
        </div>
        <div styleName="parade__section">
          {iconsView}
        </div>
      </div>
    </div>
  );
};

export default IconParade;
