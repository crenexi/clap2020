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

  // Thumb variants
  const thumbStyleName = `thumb thumb--${format}`;

  // Background image
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="frame">
      <div styleName={thumbStyleName} style={thumbStyle} />
      <div styleName="label">Preview</div>
    </div>
  );
};

PosterPreview.propTypes = {
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  quality: oneOf(['standard', 'high-def', 'black/white']).isRequired,
};

export default PosterPreview;
