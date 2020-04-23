import React from 'react';
// import { PraiseAsync } from '@scenes/Praise';
// import { ShareAsync } from '@scenes/Share';
// import { GetReadyAsync } from '@scenes/GetReady';
// import { HeroesAsync } from '@components/scenes/Heroes';
// import { DesignAsync } from '@scenes/Design';
import AppMain from './AppMain';

const AppMainContainer = () => {
  const routes = [
    // { path: '/praise', exact: true, component: PraiseAsync },
    // { path: '/share', exact: false, component: ShareAsync },
    // { path: '/get-ready', exact: true, component: GetReadyAsync },
    // { path: '/heroes', exact: true, component: HeroesAsync },
    // { path: '/design', exact: true, component: DesignAsync },
  ];

  return <AppMain routes={routes} />;
};

export default AppMainContainer;
