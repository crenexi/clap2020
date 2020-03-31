import React from 'react';
import BrandLogo from 'components/shared/BrandLogo';
import './AppFooter.scss';

const AppFooter = () => {
  const clapTime = 'April 23rd @ 7:00 PM';

  return (
    <footer styleName="footer">
      <div styleName="footer__main">
        <div styleName="footer__brand">
          <BrandLogo variant="white" />
        </div>
        <div styleName="footer__clap-time">{clapTime}</div>
      </div>
    </footer>
  );
};

export default AppFooter;
