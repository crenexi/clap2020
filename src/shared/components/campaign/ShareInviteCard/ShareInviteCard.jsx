import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShareInviteButton from '../ShareInviteButton';
import './ShareInviteCard.scss';

const ShareInviteCard = (props) => {
  const { tagsPretext, tagsText, posterThumbUrl, large } = props;

  const frameStyleName = classNames('frame', {
    'frame--large': large,
  });

  // Square poster thumb
  const previewStyle = { backgroundImage: `url('${posterThumbUrl}')` };

  return (
    <div styleName={frameStyleName}>
      <div styleName="header">
        <div styleName="header__overline">Hashtags</div>
        <div styleName="header__pretext">{tagsPretext}</div>
        <div styleName="header__text">{tagsText}</div>
      </div>
      <div styleName="main">
        <div styleName="main__preview" style={previewStyle} />
        <div styleName="main__invite">
          <ShareInviteButton large={large} />
        </div>
      </div>
    </div>
  );
};

ShareInviteCard.propTypes = {
  tagsPretext: PropTypes.string.isRequired,
  tagsText: PropTypes.string.isRequired,
  posterThumbUrl: PropTypes.string.isRequired,
  large: PropTypes.bool.isRequired,
};

export default ShareInviteCard;
