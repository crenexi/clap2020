import React from 'react';
import PropTypes, { shape } from 'prop-types';
import * as Scroll from 'react-scroll';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, FaIcon } from '@components/ui';
import posterSelectionType from '@types/poster-selection-type';
import { PosterSelect, ShareButtons } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const {
    cardId,
    overline,
    tagsText,
    minimalTags,
    includePoster,
    posterSelection,
    showOptions,
    onMinimalTagsToggle,
    onPosterToggle,
    onToggleOptions,
    onPosterSelect,
    onShare,
    onCopy,
  } = props;

  const ScrollElement = Scroll.Element;

  const minimalTagsSwitch = (
    <Switch
      checked={!!minimalTags}
      onChange={onMinimalTagsToggle}
      name="minimalTags"
    />
  );

  const posterSwitch = (
    <Switch
      checked={!!includePoster}
      onChange={onPosterToggle}
      name="includePoster"
    />
  );

  const currentOptions = (
    <div styleName="options__current">
      <div styleName="options__current-prop">
        {posterSelection.format}
      </div>
      <div styleName="options__current-prop">
        {posterSelection.quality}
      </div>
    </div>
  );

  const optionsToggle = (
    <MuiButtonBase
      style={{ width: '100%' }}
      onClick={onToggleOptions}
    >
      <div styleName="options__btn">
        <div styleName="options__btn-label">
          {showOptions ? 'Hide' : 'Change'}
        </div>
        <div styleName="options__btn-icon">
          <FaIcon icon={showOptions ? 'minus' : 'plus'} />
        </div>
      </div>
    </MuiButtonBase>
  );

  const optionsMain = (
    <div styleName="options__main">
      <PosterSelect
        selection={posterSelection}
        onChange={onPosterSelect}
      />
      <div styleName="options__close">
        <Button
          variant="primary"
          endIcon="check-circle"
          click={onToggleOptions}
        >
          Looks Good
        </Button>
      </div>
    </div>
  );

  const options = (
    <div styleName="options">
      <h5 styleName="options__title">Poster URL</h5>
      {currentOptions}
      {optionsToggle}
      {showOptions && optionsMain}
    </div>
  );

  return (
    <ScrollElement styleName="frame" name={cardId}>
      <div styleName="card">
        <div styleName="overline">{overline}</div>
        <div styleName="main">
          <div styleName="main__tags">
            {minimalTags ? tagsText.minimal : tagsText.all }
          </div>
          <div styleName="main__minimal-tags-toggle">
            <FormControlLabel
              control={minimalTagsSwitch}
              label="Minimal Hashtags"
            />
          </div>
          <div styleName="main__poster-toggle">
            <FormControlLabel
              control={posterSwitch}
              label="Include Poster"
            />
          </div>
          {includePoster && options}
        </div>
        <div styleName="actions">
          <ShareButtons share={onShare} copy={onCopy} />
        </div>
      </div>
    </ScrollElement>
  );
};

ShareCard.propTypes = {
  cardId: PropTypes.string.isRequired,
  overline: PropTypes.string.isRequired,
  tagsText: shape({
    minimal: PropTypes.string.isRequired,
    all: PropTypes.string.isRequired,
  }).isRequired,
  minimalTags: PropTypes.bool.isRequired,
  includePoster: PropTypes.bool.isRequired,
  posterSelection: posterSelectionType.isRequired,
  showOptions: PropTypes.bool.isRequired,
  onMinimalTagsToggle: PropTypes.func.isRequired,
  onPosterToggle: PropTypes.func.isRequired,
  onToggleOptions: PropTypes.func.isRequired,
  onPosterSelect: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
