import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './BgCover.scss';

const BgCover = (props) => {
  const { url, imagePosition, blanketColor, children } = props;

  const imageStyle = {
    backgroundPosition: imagePosition,
    backgroundImage: `url('${url}')`,
  };

  const blanketStyle = {
    backgroundColor: blanketColor,
  };

  return (
    <Fragment>
      <div styleName="frame">
        <div styleName="frame__cover">
          <div styleName="frame__cover-image" style={imageStyle} />
          <div styleName="frame__cover-blanket" style={blanketStyle} />
        </div>
      </div>
      <div styleName="frame-content">{children}</div>
    </Fragment>
  );
};

BgCover.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  imagePosition: PropTypes.string,
  blanketColor: PropTypes.string,
};

BgCover.defaultProps = {
  imagePosition: 'center center',
  blanketColor: 'rgba(0, 0, 0, .2)',
};

export default BgCover;
