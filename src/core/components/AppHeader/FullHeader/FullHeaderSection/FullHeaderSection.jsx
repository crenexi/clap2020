import React from 'react';
import PropTypes from 'prop-types';
import { BgCover } from '@components/ui';
import './FullHeaderSection.scss';

const FullHeaderSection = (props) => {
  const {
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
    <div styleName="section">
      <BgCover
        url={coverUrl}
        imagePosition={coverPosition}
        blanketColor={blanketColor}
        blend={blend}
      >
        <div styleName="main">{children}</div>
      </BgCover>
    </div>
  );
};

FullHeaderSection.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  coverPosition: PropTypes.string.isRequired,
  blanketColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FullHeaderSection;
