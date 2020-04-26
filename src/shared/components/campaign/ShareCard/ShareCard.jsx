import React from 'react';
import PropTypes, { shape } from 'prop-types';
import * as Scroll from 'react-scroll';
import MuiButtonBase from '@material-ui/core/ButtonBase';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import posterSelectionType from '@types/poster-selection-type';
import useBreakpoint from '@hooks/use-breakpoint';
import { Button, FaIcon } from '@components/ui';
import { PosterSelect, ShareButtons } from '@components/campaign';
import './ShareCard.scss';

const ShareCard = (props) => {
  const {
    cardId,
    overline,
    tagsText,
    allTags,
    includePoster,
    posterSelection,
    showOptions,
    onAllTagsToggle,
    onPosterToggle,
    onToggleOptions,
    onPosterSelect,
    onShare,
    onCopy,
  } = props;

  const isGtXs = useBreakpoint('gt-xs');

  const ScrollElement = Scroll.Element;


  return (
    <ScrollElement styleName="frame" name={cardId}>
      <div styleName="card">
        <div styleName="overline">{overline}</div>

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
  allTags: PropTypes.bool.isRequired,
  includePoster: PropTypes.bool.isRequired,
  posterSelection: posterSelectionType.isRequired,
  showOptions: PropTypes.bool.isRequired,
  onAllTagsToggle: PropTypes.func.isRequired,
  onPosterToggle: PropTypes.func.isRequired,
  onToggleOptions: PropTypes.func.isRequired,
  onPosterSelect: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default ShareCard;
