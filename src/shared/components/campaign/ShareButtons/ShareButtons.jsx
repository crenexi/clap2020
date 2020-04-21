import React from 'react';
import PropTypes from 'prop-types';
import { FaIcon } from 'components/ui';
import Grid from './Grid';

const ShareButtons = ({ share, copy }) => {
  const buttonsData = [
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

  return <Grid buttonsData={buttonsData} />;
};

ShareButtons.propTypes = {
  share: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
};

export default ShareButtons;
