import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import IconButton from 'components/shared/IconButton';
import FaIcon from 'components/shared/FaIcon';
import ShareButtonsView from './ShareButtonsView';

const ShareButtons = ({ share, copy }) => {
  const buttonClass = 'c2-share-btn';
  const labelClass = 'c2-share-btn-label';

  // Define key/children/click for buttons0
  const btnsData = [
    {
      key: 'twitter',
      isIconButton: false,
      children: <FaIcon icon="twitter" prefix="fab" />,
      click: () => share({ to: 'twitter' }),
    },
    {
      key: 'facebook',
      isIconButton: false,
      children: <FaIcon icon="facebook" prefix="fab" />,
      click: () => share({ to: 'facebook' }),
    },
    {
      key: 'instagram',
      isIconButton: false,
      children: <FaIcon icon="instagram" prefix="fab" />,
      click: () => share({ to: 'instagram' }),
    },
    {
      key: 'whatsapp',
      isIconButton: false,
      children: <FaIcon icon="whatsapp" prefix="fab" />,
      click: () => share({ to: 'whatsapp' }),
    },
    {
      key: 'linkedin',
      isIconButton: false,
      children: <FaIcon icon="linkedin-in" prefix="fab" />,
      click: () => share({ to: 'linkedin' }),
    },
    {
      key: 'reddit',
      isIconButton: false,
      children: <FaIcon icon="reddit-alien" prefix="fab" />,
      click: () => share({ to: 'reddit' }),
    },
    {
      key: 'email',
      isIconButton: false,
      children: <FaIcon icon="envelope" />,
      click: () => share({ to: 'email' }),
    },
    {
      key: 'share',
      isIconButton: true,
      children: <FaIcon icon="share-alt" />,
      click: () => share({ to: 'webAPI' }),
    },
    {
      key: 'copy',
      isIconButton: true,
      children: <FaIcon icon="copy" />,
      click: copy,
    },
  ];

  // Create JSX buttons map
  const buttons = btnsData.reduce((buttons, btnData) => {
    const { key, isIconButton, children, click } = btnData;

    const classes = {
      root: `${buttonClass} ${buttonClass}--${key}`,
      label: `${labelClass} ${labelClass}--${key}`,
    };

    const button = isIconButton ? (
      <IconButton
        variant="ghost"
        classes={classes}
        click={click}
      >
        {children}
      </IconButton>
    ) : (
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

  return <ShareButtonsView buttons={buttons} />;
};

ShareButtons.propTypes = {
  share: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
};

export default ShareButtons;
