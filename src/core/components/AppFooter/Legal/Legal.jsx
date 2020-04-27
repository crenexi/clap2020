import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from '@components/ui';
import { BrandContact } from '@components/brand';
import './Legal.scss';

const Legal = (props) => {
  const { thisYear, cxUrl, cxFavUrl, tosUrl, ppUrl } = props;

  const cxLink = (
    <a href={cxUrl} target="_blank" rel="noopener noreferrer">Crenexi</a>
  );

  return (
    <div styleName="legal">
      <div styleName="messenger">
        <BrandContact />
      </div>
      <div styleName="built-by">
        <span>Built with clean&nbsp;</span>
        <div styleName="icon">
          <FaIcon icon="hands-wash" />
        </div>
        <span>&nbsp;by {cxLink}</span>
        <span styleName="cx-fav">
          <img src={cxFavUrl} alt="Crenexi Fav" />
        </span>
      </div>
      <div styleName="main">
        <small styleName="detail">
          <div styleName="copyright">
            <span styleName="icon">
              <FaIcon icon="copyright" />
            </span>
            <span>&nbsp;Crenexi {thisYear}</span>
          </div>
        </small>
        <small styleName="detail">
          <a href={tosUrl} target="blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </small>
        <small styleName="detail">
          <a href={ppUrl} target="blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </small>
      </div>
    </div>
  );
};

Legal.propTypes = {
  thisYear: PropTypes.number.isRequired,
  cxUrl: PropTypes.string.isRequired,
  cxFavUrl: PropTypes.string.isRequired,
  tosUrl: PropTypes.string.isRequired,
  ppUrl: PropTypes.string.isRequired,
};

export default Legal;
