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
    <div styleName="card">
      <div styleName="header">
        <div styleName="header__overline">Hashtags</div>
        <div styleName="header__pretext">{pretext}</div>
        <div styleName="header__text">{text}</div>
  </div>
  <div styleName="share-invite">
    <ShareInviteCard />
  </div>



<div styleName="card-frame">
      <div styleName="card">
        <div styleName="preview" style={previewStyle} />
        <div styleName="invite">
          <ShareInviteButton />
        </div>
      </div>
    </div>
  );
};

export default ShareInviteCard;
