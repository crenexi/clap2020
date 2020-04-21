import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import BrandMessenger from 'components/shared/BrandMessenger';
import './LegalFooter.scss';

const LegalFooter = () => {
  const cxUrl = 'https://www.crenexi.com';
  const cxAssetsPath = 'https://crenexi.s3.amazonaws.com/public';
  const cxFavUrl = `${cxAssetsPath}/brand/fav_light.svg`;
  const thisYear = (new Date()).getFullYear();
  const tosUrl = '/assets/legal/Clap2020-TOS.html';
  const ppUrl = '/assets/legal/Clap2020-Privacy-Policy.html';

  const cxLink = (
    <a href={cxUrl} target="_blank" rel="noopener noreferrer">Crenexi</a>
  );

  return (
    <div styleName="legal">
      <div styleName="legal__messenger">
        <BrandMessenger />
      </div>
      <div styleName="legal__built-by">
        <span>Built with clean&nbsp;</span>
        <div styleName="legal__icon">
          <FaIcon icon="hands-wash" />
        </div>
        <span>&nbsp;by {cxLink}</span>
        <span styleName="legal__cx-fav">
          <img src={cxFavUrl} alt="Crenexi Fav" />
        </span>
      </div>
      <div styleName="legal__main">
        <small styleName="legal__detail">
          <div styleName="legal__copyright">
            <span styleName="legal__icon">
              <FaIcon icon="copyright" />
            </span>
            <span>&nbsp;Crenexi {thisYear}</span>
          </div>
        </small>
        <small styleName="legal__detail">
          <a href={tosUrl} target="blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </small>
        <small styleName="legal__detail">
          <a href={ppUrl} target="blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </small>
      </div>
    </div>
  );
};

export default LegalFooter;
