import React from 'react';
import PropTypes from 'prop-types';
import { PosterSelect, ShareButtons } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const {
    overline,
    payload,
    posterSelection,
    onPosterSelect,
    onShare,
    onCopy,
  } = props;

  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">{payload}</div>
        <div styleName="poster-select">
          <PosterSelect
            selection={posterSelection}
            onChange={onPosterSelect}
          />
        </div>
        <div styleName="actions">
          <ShareButtons share={onShare} copy={onCopy} />
        </div>
      </div>
    </div>
  );
};

ShareCard.propTypes = {
  overline: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  posterSelection: PropTypes.string.isRequired,
  onPosterSelect: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
