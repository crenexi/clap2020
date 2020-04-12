import React from 'react';
import shareEditorTagsType from 'types/share-editor-tags';
import './SharePreview.scss';

const SharePreview = ({ tags }) => {
  const { baseTags, endTags } = tags;

  return (
    <div styleName="preview">
      <div styleName="poster">
        <div styleName="poster__thumb" />
      </div>
      <div styleName="tags">
        <div styleName="tags__base">{baseTags}</div>
        <div styleName="tags__end">{endTags}</div>
      </div>
    </div>
  );
};

SharePreview.propTypes = {
  tags: shareEditorTagsType.isRequired,
};

export default SharePreview;
