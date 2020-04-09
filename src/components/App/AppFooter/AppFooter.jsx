import React, { Fragment } from 'react';
import useContent from 'hooks/use-content';
import BrandLogo from 'components/shared/BrandLogo';
import FollowUs from './FollowUs';
import FooterNav from './FooterNav';
import LegalFooter from './LegalFooter';
import './AppFooter.scss';

const AppFooter = () => {
  const clapTime = 'April 23rd @ 7:00 PM';

  // Prepare footer nav
  const { footerNavs } = useContent();
  const { metaNav, covid19Nav } = footerNavs;

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
            <FooterNav metaNav={metaNav} covid19Nav={covid19Nav} />
          </div>
        </div>
        <LegalFooter />
      </footer>
    </Fragment>
  );
};

export default AppFooter;
