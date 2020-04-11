import React from 'react';
import shareButtonsType from 'types/share-button';
import { userAgent } from 'utils/helpers';
import './ShareButtonsView.scss';

const ShareButtonsView = ({ buttons }) => {
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

ShareButtonsView.propTypes = {
  buttons: shareButtonsType.isRequired,
};

export default ShareButtonsView;
