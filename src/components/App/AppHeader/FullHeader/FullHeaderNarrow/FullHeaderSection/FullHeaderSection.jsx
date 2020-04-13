import React from 'react';
import PropTypes from 'prop-types';
import BgCover from 'components/shared/BgCover';
import './FullHeaderSection.scss';

const FullHeaderSection = (props) => {
  const {
    minHeight,
    coverUrl,
    coverPosition,
    blanketColor,
    children,
  } = props;

  const blend = {
    color: blanketColor,
    mode: 'color',
  };

  return (
    <div styleName="section" style={{ minHeight }}>
      <BgCover
        url={coverUrl}
        imagePosition={coverPosition}
        blanketColor={blanketColor}
        blend={blend}
      >
        <div styleName="section__main">{children}</div>
      </BgCover>
    </div>
  );
};

FullHeaderSection.propTypes = {
  minHeight: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  coverPosition: PropTypes.string.isRequired,
  blanketColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FullHeaderSection;
