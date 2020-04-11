import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { userAgent } from 'utils/helpers';
import './ShareButtonsGridView.scss';

const ShareButtonsGridView = ({ buttons }) => {
  const isMobile = userAgent.isMobile();

  const sn = {
    grid: 'grid',
    gridPrimary: 'grid__primary',
    gridPrimaryItem: 'grid__primary-item',
    gridSocial: 'grid__social',
    gridSocialItem: 'grid__social-item',
  };

  return (
    <div styleName={sn.grid}>
      <div styleName={sn.gridSocial}>
        <div styleName={sn.gridSocialItem}>{buttons.twitter}</div>
        <div styleName={sn.gridSocialItem}>{buttons.facebook}</div>
        {isMobile && (
          <div styleName={sn.gridSocialItem}>{buttons.instagram}</div>
        )}
        <div styleName={sn.gridSocialItem}>{buttons.whatsapp}</div>
        <div styleName={sn.gridSocialItem}>{buttons.linkedin}</div>
        <div styleName={sn.gridSocialItem}>{buttons.reddit}</div>
        <div styleName={sn.gridSocialItem}>{buttons.email}</div>
      </div>
      <div styleName={sn.gridPrimary}>
        <div styleName={sn.gridPrimaryItem}>{buttons.copy}</div>
        {isMobile && (
          <div styleName={sn.gridPrimaryItem}>{buttons.share}</div>
        )}
      </div>
    </div>
  );
};

ShareButtonsGridView.propTypes = {
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

export default ShareButtonsGridView;
