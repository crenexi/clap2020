import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import BrandLogo from 'components/shared/BrandLogo';
import IconButton from 'components/shared/IconButton';
import AboveTheFold from './AboveTheFold';
import IconParade from './IconParade';
import './FullHeaderView.scss';

const FullHeaderView = ({ minHeight, coverUrl, downClick }) => (
  <div styleName="header" style={{ minHeight }}>
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
      <AboveTheFold />
    </BgCover>
    <div styleName="header__down-invite">
      <IconButton
        icon="arrow-alt-down"
        label="3 Simple Steps"
        click={downClick}
      />
    </div>
    <IconParade />
  </div>
);

FullHeaderView.propTypes = {
  minHeight: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  downClick: PropTypes.func.isRequired,
};

export default FullHeaderView;
