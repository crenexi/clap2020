import React from 'react';
import { useSelector } from 'react-redux';
import { oneOf } from 'prop-types';
import shareEditorTagsType from '@types/share-editor-tags-type';
import Preview from './Preview';

const PreviewContainer = ({ tags, poster }) => {
  const posterMatch = useSelector((s) => {
    return s.campaign.posters.find(p => p.format === poster);
  });

  const thumbUrl = !posterMatch ? '' : posterMatch.thumbUrl;

  return (
    <Preview
      tags={tags}
      posterThumbUrl={thumbUrl}
    />
  );
};

PreviewContainer.propTypes = {
  tags: shareEditorTagsType.isRequired,
  poster: oneOf(['', 'story', 'square', 'rectangle']).isRequired,
};

export default PreviewContainer;
