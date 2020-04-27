import React from 'react';
import { useSelector } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';
import MessengerButton from './MessengerButton';
import PressButton from './PressButton';
import './BrandContact.scss';

const BrandMessenger = () => {
  const messengerUrl = useSelector(s => s.campaign.urls.fbPageDM);
  const pressTooltip = 'Press Info & Contact';

  return (
    <div styleName="frame">
      <Tooltip title={messengerUrl} placement="top" enterDelay={0} arrow>
        <MessengerButton url={messengerUrl} />
      </Tooltip>
      <Tooltip title={pressTooltip} placement="top" enterDelay={0} arrow>
        <PressButton to="/share/press" />
      </Tooltip>
    </div>
  );
};

export default BrandMessenger;
