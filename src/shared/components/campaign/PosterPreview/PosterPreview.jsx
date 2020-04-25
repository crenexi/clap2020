import React from 'react';
import { useSelector } from 'react-redux';
import { oneOf } from 'prop-types';
import './PosterPreview.scss';

const PosterPreview = ({ format, quality }) => {
  const thumbUrl = useSelector((s) => {
    const match = s.campaign.posters.find(p => p.format === format);

    if (!match) return '';
    return quality === 'black/white' ? match.bwThumbUrl : match.thumbUrl;
  });

  // Background image
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="frame">
      {quality} | {format}
      <div styleName="thumb" style={thumbStyle} />
    </div>
  );
};

PosterPreview.propTypes = {
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  quality: oneOf(['standard', 'high-def', 'black/white']).isRequired,
};

export default PosterPreview;
