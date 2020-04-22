import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrandLogo } from '@components/brand';
import FollowUs from './FollowUs';
import Nav from './Nav';
import Legal from './Legal';
import './AppFooter.scss';

const AppFooter = () => {
  const { clapTime, metaNav, covid19Nav } = useSelector(s => ({
    clapTime: s.campaign.status.clapTime,
    metaNav: s.core.footerNav.metaNav,
    covid19Nav: s.core.footerNav.covid19Nav,
  }));

  return (
    <Fragment>
      <FollowUs />
      <footer styleName="footer">
        <div styleName="main">
          <div styleName="main__brand-frame">
            <div styleName="main__brand">
              <BrandLogo variant="white" />
            </div>
            <div styleName="main__clap-time">{clapTime}</div>
          </div>
          <div styleName="main__nav">
            <Nav metaNav={metaNav} covid19Nav={covid19Nav} />
          </div>
        </div>
        <Legal />
      </footer>
    </Fragment>
  );
};

export default AppFooter;
