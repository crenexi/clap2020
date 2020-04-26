import React from 'react';
import PropTypes from 'prop-types';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import { FaIcon } from '@components/ui';
import posterSelectionType from '@types/poster-selection-type';
import { PosterSelect, ShareButtons } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const {
    overline,
    payload,
    posterSelection,
    showOptions,
    onToggleOptions,
    onPosterSelect,
    onShare,
    onCopy,
  } = props;

  const optionsToggle = (
    <div styleName="options__btn">
      <div styleName="options__btn-label">
        {showOptions ? 'Hide' : 'Change Poster'}
      </div>
      <div styleName="options__btn-icon">
        <FaIcon icon={showOptions ? 'minus' : 'plus'} />
      </div>
    </div>
  );

  return (
    <div styleName="frame">
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">{payload}</div>
        <div styleName="options">
          <div styleName="options__toggle">
            <MuiButtonBase
              style={{ width: '100%' }}
              onClick={onToggleOptions}
            >
              {optionsToggle}
            </MuiButtonBase>
          </div>
          <div styleName="options__main">
            <PosterSelect
              selection={posterSelection}
              onChange={onPosterSelect}
            />
          </div>
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
  posterSelection: posterSelectionType.isRequired,
  showOptions: PropTypes.bool.isRequired,
  onToggleOptions: PropTypes.func.isRequired,
  onPosterSelect: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
