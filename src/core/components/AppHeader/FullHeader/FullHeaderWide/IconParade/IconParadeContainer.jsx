import React from 'react';
import times from 'lodash.times';
import flatten from 'lodash.flatten';
import scssVars from '@helpers/scss/exports';
import IconParade from './IconParade';

const IconParadeContainer = () => {
  const icons = [
    { key: 'user-nurse', color: scssVars.themeMarineDark2 },
    { key: 'hospital', color: scssVars.themeBlueRoseLight2 },
    { key: 'user-md', color: scssVars.themeMarineDark2 },
    { key: 'ambulance', color: scssVars.themeRedRoseLight2 },
    { key: 'hospitals', color: scssVars.themeBlueRoseLight2 },
  ];

  // Multiply array to get longer list
  const manyIcons = flatten(times(10, () => icons));

  return <IconParade icons={manyIcons} />;
};

export default IconParadeContainer;
