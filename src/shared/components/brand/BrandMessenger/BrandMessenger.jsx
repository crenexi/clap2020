import React from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import MButton from './MButton';
import './BrandMessenger.scss';

const BrandMessenger = () => {
  const url = useSelector(s => s.campaign.urls.fbPageDM);

  return (
    <div styleName="frame">
      <Tooltip title={url} placement="top" enterDelay={0} arrow>
        <MButton url={url} />
      </Tooltip>
    </div>
  );
};

export default BrandMessenger;
