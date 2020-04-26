import React from 'react';
import PropTypes from 'prop-types';
// import { userAgent } from '@helpers';
import { ShareButtons, ShareIGGuide } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const { overline, payload, onShare, onCopy } = props;

  // const isMobile = userAgent.isMobile();

  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">{payload}</div>
        <div styleName="actions">
          <ShareButtons share={onShare} copy={onCopy} />
        </div>
        {/* {isMobile && showIGGuide && <ShareIGGuide onClose={onReset} />}; */}
        <ShareIGGuide payload={payload} />
      </div>
    </div>
  );
};

ShareCard.propTypes = {
  overline: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
