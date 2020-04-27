import React, { Fragment } from 'react';
import PropTypes, { shape } from 'prop-types';
import classNames from 'classnames';
import './BgCover.scss';

const BgCover = (props) => {
  const {
    url,
    imagePosition,
    blanketColor,
    blend,
    animate,
    children,
  } = props;

  const imageClass = classNames('frame__cover-image', {
    'frame__cover-image--animate': animate,
  });

  const imageStyle = {
    backgroundPosition: imagePosition,
    backgroundImage: `url('${url}')`,
  };

  const blanketStyle = {
    backgroundColor: blanketColor,
  };

  const blendStyle = !blend ? null : {
    backgroundColor: blend.color,
    mixBlendMode: blend.mode,
  };

  return (
    <Fragment>
      <div styleName="frame">
        <div styleName="frame__cover">
          <div
            styleName={imageClass}
            style={imageStyle}
          />
          <div styleName="frame__cover-blanket" style={blanketStyle} />
          { blend && (
            <div styleName="frame__cover-blend" style={blendStyle} />
          )}
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
  blend: shape({
    color: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
  }),
  animate: PropTypes.bool,
};

BgCover.defaultProps = {
  imagePosition: 'center center',
  blanketColor: 'rgba(0, 0, 0, .2)',
  blend: null,
  animate: false,
};

export default BgCover;
