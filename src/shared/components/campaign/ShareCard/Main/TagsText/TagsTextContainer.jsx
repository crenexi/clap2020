import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shareCardStateType from '@types/share-card-state-type';
import { stringifyHashtags } from '@helpers';
import TagsText from './TagsText';

const TagsTextContainer = (props) => {
  const { shareState, onSetShareState } = props;

  const { tags, tagsExtended } = useSelector(s => ({
    tags: s.campaign.tags.list,
    tagsExtended: s.campaign.tags.listExtended,
  }));

  const [hasAllTags, setHasAllTags] = useState(true);

  const updateTagsText = (extended = true) => {
    const tagsText = extended
      ? stringifyHashtags(tagsExtended)
      : stringifyHashtags(tags);

    onSetShareState({ tagsText });
  };

  useEffect(updateTagsText, []);

  const handleHasAllTagsChange = (event) => {
    const checked = event.target.checked;
    updateTagsText(checked);
    setHasAllTags(checked);
  };

  return (
    <TagsText
      value={shareState.tagsText}
      hasAllTags={hasAllTags}
      onHasAllTagsChange={handleHasAllTagsChange}
    />
  );
};

TagsTextContainer.propTypes = {
  shareState: shareCardStateType.isRequired,
  onSetShareState: PropTypes.func.isRequired,
};

export default TagsTextContainer;
