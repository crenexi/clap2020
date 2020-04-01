import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BgCover from 'components/shared/BgCover';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
import JoinInvite from './JoinInvite';
import Countdown from './Countdown';
import IconParade from './IconParade';
import './FullHeaderView.scss';

const FullHeaderView = ({ coverUrl }) => {
  const theme = useTheme();
  const isGtSm = useMediaQuery(theme.breakpoints.up('md'));
  const logoVariant = !isGtSm ? 'white' : 'main';

  return (
    <div styleName="header">
      <div styleName="header__logo-aside">
        <div styleName="header__logo">
          <BrandLogo variant={logoVariant} />
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
        <IconButton icon="arrow-alt-down" label="Three Steps" />
      </div>
      <IconParade />
    </div>
  );
};

FullHeaderView.propTypes = {
  coverUrl: PropTypes.string.isRequired,
};

export default FullHeaderView;
