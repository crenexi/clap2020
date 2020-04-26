import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtons } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const { children, overline, onShare, onCopy } = props;

  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">{children}</div>
        <div styleName="actions">
          <ShareButtons share={onShare} copy={onCopy} />
        </div>
      </div>
    </div>
  );
};

ShareCard.propTypes = {
  children: PropTypes.node.isRequired,
  overline: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
