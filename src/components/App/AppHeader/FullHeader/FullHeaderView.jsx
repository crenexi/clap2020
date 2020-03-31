import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import MaskIcon from './MaskIcon';
import JoinInvite from './JoinInvite';
import Countdown from './Countdown';
import './FullHeaderView.scss';

const FullHeaderView = ({ coverUrl }) => {
  return (
    <div styleName="header">
      <BgCover
        url={coverUrl}
        imagePosition="75% top"
        blanketColor="rgba(19,54,109, .75)"
        animate
      >
        <JoinInvite />
        <MaskIcon />
        <Countdown />
      </BgCover>
    </div>
  );
};

FullHeaderView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
};

export default FullHeaderView;
