import React from 'react';
import PropTypes from 'prop-types';
import shareCardStateType from '@types/share-card-state-type';
import TagsText from './TagsText';

const TagsTextContainer = (props) => {
  const { shareState, onSetShareState } = props;

  const handleHasAllTagsChange = (event) => {
    onSetShareState({ hasAllTags: event.target.checked });
  };

  return (
    <TagsText
      value={shareState.tagsText}
      hasAllTags={shareState.hasAllTags}
      onHasAllTagsChange={handleHasAllTagsChange}
    />
  );
};

TagsTextContainer.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
};

export default TagsTextContainer;
