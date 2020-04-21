import React from 'react';
import PropTypes from 'prop-types';
import ShareInviteButton from '../ShareInviteButton';
import './ShareInviteCard.scss';

const ShareInviteCard = (props) => {
  const { tagsPretext, tagsText, posterThumbUrl } = props;

  // Square poster thumb
  const previewStyle = { backgroundImage: `url('${posterThumbUrl}')` };

  return (
    <div styleName="frame">
      <div styleName="header">
        <div styleName="header__overline">Hashtags</div>
        <div styleName="header__pretext">{tagsPretext}</div>
        <div styleName="header__text">{tagsText}</div>
      </div>
      <div styleName="main">
        <div styleName="main__preview" style={previewStyle} />
        <div styleName="main__invite">
          <ShareInviteButton />
        </div>
      </div>
    </div>
  );
};

ShareInviteCard.propTypes = {
  tagsPretext: PropTypes.string.isRequired,
  tagsText: PropTypes.string.isRequired,
  posterThumbUrl: PropTypes.string.isRequired,
};

export default ShareInviteCard;
