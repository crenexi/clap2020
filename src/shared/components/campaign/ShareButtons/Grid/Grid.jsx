import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { userAgent } from 'helpers';
import './Grid.scss';

const Grid = ({ buttons }) => {
  const isMobile = userAgent.isMobile();

  const sn = {
    grid: 'grid',
    primary: 'primary',
    primaryItem: 'primary-item',
    primaryLabel: 'primary-label',
    social: 'social',
    socialItem: 'social-item',
  };

  return (
    <div styleName={sn.grid}>
      <div styleName={sn.social}>
        <div styleName={sn.socialItem}>{buttons.twitter}</div>
        <div styleName={sn.socialItem}>{buttons.facebook}</div>
        {isMobile && (
          <div styleName={sn.socialItem}>{buttons.instagram}</div>
        )}
        <div styleName={sn.socialItem}>{buttons.whatsapp}</div>
        <div styleName={sn.socialItem}>{buttons.linkedin}</div>
        <div styleName={sn.socialItem}>{buttons.reddit}</div>
        <div styleName={sn.socialItem}>{buttons.email}</div>
      </div>
      <div styleName={sn.primary}>
        <div styleName={sn.primaryItem}>
          <h6 styleName={sn.primaryLabel}>Copy</h6>
          {buttons.copy}
        </div>
        {isMobile && (
          <div styleName={sn.primaryItem}>
            <h6 styleName={sn.primaryLabel}>Choose</h6>
            {buttons.share}
          </div>
        )}
      </div>
    </div>
  );
};

Grid.propTypes = {
  buttons: shape({
    twitter: PropTypes.element.isRequired,
    facebook: PropTypes.element.isRequired,
    instagram: PropTypes.element.isRequired,
    whatsapp: PropTypes.element.isRequired,
    linkedin: PropTypes.element.isRequired,
    reddit: PropTypes.element.isRequired,
    email: PropTypes.element.isRequired,
    share: PropTypes.element.isRequired,
    copy: PropTypes.element.isRequired,
  }).isRequired,
};

export default Grid;
