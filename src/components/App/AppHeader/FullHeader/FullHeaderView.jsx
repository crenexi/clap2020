import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import BrandLogo from 'components/shared/BrandLogo';
import MaskIcon from './MaskIcon';
import JoinInvite from './JoinInvite';
import Countdown from './Countdown';
import IconParade from './IconParade';
import './FullHeaderView.scss';

const FullHeaderView = ({ coverUrl }) => {
  return (
    <div styleName="header">
      <BgCover
        url={coverUrl}
        imagePosition="75% top"
        blanketColor="rgba(255, 255, 255, .65)"
      >
        <BrandLogo variant="main" />
        <JoinInvite />
        <MaskIcon />
        <Countdown />
      </BgCover>
      <IconParade />
    </div>
  );
};

FullHeaderView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
};

export default FullHeaderView;
