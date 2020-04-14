import React from 'react';
import useContent from 'hooks/use-content';
import ShareInviteButton from '../ShareInviteButton';
import './ShareInviteCard.scss';

const ShareInviteCard = () => {
  const { campaignContent } = useContent();

  // Content
  const { status, posters } = campaignContent;
  const { pretext, text } = status.campaignTags;

  // Get the thumb URL of the square poster
  const squarePoster = posters.find(p => p.format === 'square');
  const thumbUrl = !squarePoster ? '' : squarePoster.thumbUrl;
  const previewStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="frame">
      <div styleName="header">
        <div styleName="header__overline">Hashtags</div>
        <div styleName="header__pretext">{pretext}</div>
        <div styleName="header__text">{text}</div>
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

export default ShareInviteCard;
