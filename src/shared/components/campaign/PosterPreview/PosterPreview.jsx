import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes, { oneOf } from 'prop-types';
import './PosterPreview.scss';

const PosterPreview = ({ format, isBlackWhite }) => {
  const { thumbUrl } = useSelector((s) => {
    const match = s.campaign.posters.find(p => p.format === format);
    return isBlackWhite ? match.bwThumbUrl : thumbUrl;
  });

  // Format label
  const label = isBlackWhite ? `${format} - Black/White` : format;

  // Background image
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  return (
    <div styleName="frame">
      <div styleName="label">{label}</div>
      <div styleName="thumb" style={thumbStyle} />
    </div>
  );
};

PosterPreview.propTypes = {
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  isBlackWhite: PropTypes.bool,
};

PosterPreview.defaultProps = {
  isBlackWhite: false,
};

export default PosterPreview;
