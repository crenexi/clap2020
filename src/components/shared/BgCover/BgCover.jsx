import React from 'react';
import PropTypes from 'prop-types';
import './BgCover.scss';

const BgCover = ({ url, imagePosition, blanketColor }) => {
  const imageStyle = {
    backgroundPosition: imagePosition,
    backgroundImage: `url('${url}')`,
  };

  const blanketStyle = {
    backgroundColor: blanketColor,
  };

  return (
    <div styleName="cover">
      <div styleName="cover__inner">
        <div styleName="cover__image" style={imageStyle} />
        <div styleName="cover__blanket" style={blanketStyle} />
      </div>
    </div>
  );
};

BgCover.propTypes = {
  url: PropTypes.string.isRequired,
  imagePosition: PropTypes.string,
  blanketColor: PropTypes.string,
};

BgCover.defaultProps = {
  imagePosition: 'center center',
  blanketColor: 'rgba(0, 0, 0, .2)',
};

export default BgCover;
