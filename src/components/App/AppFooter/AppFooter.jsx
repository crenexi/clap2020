import React, { Fragment } from 'react';
import BrandLogo from 'components/shared/BrandLogo';
import FollowUs from './FollowUs';
import LegalFooter from './LegalFooter';
import './AppFooter.scss';

const AppFooter = () => {
  const clapTime = 'April 23rd @ 7:00 PM';

  return (
    <Fragment>
      <FollowUs />
      <footer styleName="footer">
        <div styleName="footer__main">
          <div styleName="footer__brand">
            <BrandLogo variant="white" />
          </div>
          <div styleName="footer__clap-time">{clapTime}</div>
        </div>
        <div styleName="footer__legal">
          <LegalFooter />
        </div>
      </footer>
    </Fragment>
  );
};

export default AppFooter;
