import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { userAgent } from 'utils/helpers';
import './ShareButtonsGridView.scss';

const ShareButtonsGridView = ({ buttons }) => {
  const isMobile = userAgent.isMobile();

  const sn = {
    actions: 'actions',
    actionsPrimary: 'actions__primary',
    actionsPrimaryItem: 'actions__primary-item',
    actionsSocial: 'actions__social',
    actionsSocialItem: 'actions__social-item',
  };

  return (
    <div styleName={sn.actions}>
      <div styleName={sn.actionsSocial}>
        <div styleName={sn.actionsSocialItem}>{buttons.twitter}</div>
        <div styleName={sn.actionsSocialItem}>{buttons.facebook}</div>
        {isMobile && (
          <div styleName={sn.actionsSocialItem}>{buttons.instagram}</div>
        )}
        <div styleName={sn.actionsSocialItem}>{buttons.whatsapp}</div>
        <div styleName={sn.actionsSocialItem}>{buttons.linkedin}</div>
        <div styleName={sn.actionsSocialItem}>{buttons.reddit}</div>
        <div styleName={sn.actionsSocialItem}>{buttons.email}</div>
      </div>
      <div styleName={sn.actionsPrimary}>
        <div styleName={sn.actionsPrimaryItem}>{buttons.copy}</div>
        {isMobile && (
          <div styleName={sn.actionsPrimaryItem}>{buttons.share}</div>
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
