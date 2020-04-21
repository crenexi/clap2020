import React from 'react';
import PropTypes from 'prop-types';
import shareEditorTagsType from '@types/share-editor-tags-type';
import './Preview.scss';

const Preview = ({ tags, posterThumbUrl }) => {
  const { baseTags, endTags } = tags;

  // Top styleName depends if there's a poster or not
  const thumbStyle = { backgroundImage: `url('${posterThumbUrl}')` };
  const styleName = posterThumbUrl ? 'preview preview--has-thumb' : 'preview';

  const posterPreview = (
    <div styleName="poster">
      <div styleName="poster__thumb" style={thumbStyle} />
    </div>
  );

  return (
    <div styleName={styleName}>
      {posterThumbUrl && posterPreview}
      <div styleName="tags">
        <div styleName="tags__base">{baseTags}</div>
        <div styleName="tags__end">{endTags}</div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  tags: shareEditorTagsType.isRequired,
  posterThumbUrl: PropTypes.string.isRequired,
};

export default Preview;
