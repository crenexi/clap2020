import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
import JoinInvite from './JoinInvite';
import Countdown from './Countdown';
import IconParade from './IconParade';
import './FullHeaderView.scss';

const FullHeaderView = ({ coverUrl, downClick }) => (
  <div styleName="header">
    <div styleName="header__logo-aside">
      <div styleName="header__logo">
        <BrandLogo variant="main" />
      </div>
    </div>
    <BgCover
      url={coverUrl}
      imagePosition="75% top"
      blanketColor="rgba(255, 255, 255, .65)"
    >
      <JoinInvite />
      <Countdown />
    </BgCover>
    <div styleName="header__down-invite">
      <IconButton
        icon="arrow-alt-down"
        label="Three Steps"
        click={downClick}
      />
    </div>
    <IconParade />
  </div>
);

FullHeaderView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  downClick: PropTypes.func.isRequired,
};

export default FullHeaderView;
