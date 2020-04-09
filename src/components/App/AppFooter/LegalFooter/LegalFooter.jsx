import React from 'react';
import FaIcon from 'components/shared/FaIcon';
import './LegalFooter.scss';

const LegalFooter = () => {
  const cxUrl = 'https://www.crenexi.com';
  const cxAssetsPath = 'https://crenexi.s3.amazonaws.com/public';
  const cxFavUrl = `${cxAssetsPath}/brand/fav_light.svg`;
  const thisYear = (new Date()).getFullYear();

  const cxLink = (
    <a href={cxUrl} target="_blank" rel="noopener noreferrer">Crenexi</a>
  );


  return (
    <div styleName="legal">
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
      <small styleName="legal__copyright">
        <span styleName="legal__icon">
          <FaIcon icon="copyright" />
        </span>
        <span>&nbsp;Crenexi {thisYear}</span>
      </small>
    </div>
  );
};

export default LegalFooter;
