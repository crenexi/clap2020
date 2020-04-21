import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import MButton from './MButton';
import './BrandMessenger.scss';

const BrandMessenger = () => {
  const url = '';

  return (
    <div styleName="frame">
      <Tooltip title={url} placement="top" enterDelay={0} arrow>
        <MButton url={url} />
      </Tooltip>
    </div>
  );
};

export default BrandMessenger;
