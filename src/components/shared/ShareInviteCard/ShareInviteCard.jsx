import React from 'react';
import useContent from 'hooks/use-content';
import ShareInviteButton from '../ShareInviteButton';
import './ShareInviteCard.scss';

const ShareInviteCard = () => {
  const { posters } = useContent();

  // Get the thumb URL of the square poster
  const squarePoster = posters.find(p => p.format === 'square');
  const thumbUrl = !squarePoster ? '' : squarePoster.thumbUrl;
  const previewStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
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
