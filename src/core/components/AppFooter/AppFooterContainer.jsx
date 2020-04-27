import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppFooter from './AppFooter';

const AppFooterContainer = () => {
  const { clapTime, metaNav, covid19Nav } = useSelector(s => ({
    clapTime: s.campaign.status.clapTime,
    metaNav: s.core.footerNav.metaNav,
    covid19Nav: s.core.footerNav.covid19Nav,
  }));

  // Paths that need extra space at the bottom (ex. for fixed bottom nav)
  const extraSpacePaths = ['/share'];
  const extraSpacer = extraSpacePaths.some(path => useRouteMatch({ path }));

  return (
    <AppFooter
      clapTime={clapTime}
      metaNav={metaNav}
      covid19Nav={covid19Nav}
      extraSpacer={extraSpacer}
    />
  );
};

export default AppFooterContainer;
