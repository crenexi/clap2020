import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { userAgent } from 'utils/helpers';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './HashtagsActions.scss';

const HashtagsActions = ({ share, copy }) => {
  const buttonClass = 'c2-action-btn';
  const labelClass = 'c2-action-btn-label';
  const isMobile = userAgent.isMobile();

  const sn = {
    actions: 'actions',
    actionsRow: 'actions__row',
    actionsItem: 'actions__item',
  };

  // Define key/children/click for buttons0
  const btnsData = [
    {
      key: 'twitter',
      children: <FaIcon icon="twitter" prefix="fab" />,
      click: () => share({ to: 'twitter' }),
    },
    {
      key: 'facebook',
      children: <FaIcon icon="facebook-f" prefix="fab" />,
      click: () => share({ to: 'facebook' }),
    },
    {
      key: 'instagram',
      children: <FaIcon icon="instagram" prefix="fab" />,
      click: () => share({ to: 'instagram' }),
    },
    {
      key: 'share',
      children: <FaIcon icon="share-alt" />,
      click: () => share({ to: 'webAPI' }),
    },
    {
      key: 'email',
      children: <FaIcon icon="envelope" />,
      click: () => share({ to: 'email' }),
    },
    {
      key: 'copy',
      children: <FaIcon icon="copy" />,
      click: copy,
    },
  ];

  // Create JSX buttons map
  const buttons = btnsData.reduce((buttons, btnData) => {
    const { key, children, click } = btnData;

    const classes = {
      root: `${buttonClass} ${buttonClass}--${key}`,
      label: `${labelClass} ${labelClass}--${key}`,
    };

    const button = (
      <Button
        variant="ghost"
        classes={classes}
        click={click}
      >
        {children}
      </Button>
    );

    return { ...buttons, [key]: button };
  }, {});

  const rowsMobile = (
    <Fragment>
      <div styleName={sn.actionsRow}>
        <div styleName={sn.actionsItem}>{buttons.twitter}</div>
        <div styleName={sn.actionsItem}>{buttons.facebook}</div>
        <div styleName={sn.actionsItem}>{buttons.instagram}</div>
      </div>
      <div styleName={sn.actionsRow}>
        <div styleName={sn.actionsItem}>{buttons.email}</div>
        <div styleName={sn.actionsItem}>{buttons.share}</div>
      </div>
    </Fragment>
  );

  const rowsDesktop = (
    <Fragment>
      <div styleName={sn.actionsRow}>
        <div styleName={sn.actionsItem}>{buttons.twitter}</div>
        <div styleName={sn.actionsItem}>{buttons.facebook}</div>
        <div styleName={sn.actionsItem}>{buttons.email}</div>
      </div>
    </Fragment>
  );

  return (
    <div styleName={sn.actions}>
      {isMobile ? rowsMobile : rowsDesktop}
      <div styleName={sn.actionsRow}>
        <div styleName={sn.actionsItem}>{buttons.copy}</div>
      </div>
    </div>
  );
};

HashtagsActions.propTypes = {
  share: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
};

export default HashtagsActions;
