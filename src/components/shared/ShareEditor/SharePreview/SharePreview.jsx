import React from 'react';
import { oneOf } from 'prop-types';
import shareEditorTagsType from 'types/share-editor-tags';
import useContent from 'hooks/use-content';
import './SharePreview.scss';

const SharePreview = ({ tags, poster }) => {
  const { campaignContent } = useContent();

  // Content
  const { posters } = campaignContent;
  const { baseTags, endTags } = tags;

  // Get thumb from posters data
  const posterData = posters.find(p => p.format === poster);
  const thumbUrl = !posterData ? '' : posterData.thumbUrl;
  const thumbStyle = { backgroundImage: `url('${thumbUrl}')` };

  // Top styleName depends if there's a poster or not
  const styleName = thumbUrl ? 'preview preview--has-thumb' : 'preview';

  const posterPreview = (
    <div styleName="poster">
      <div styleName="poster__thumb" style={thumbStyle} />
    </div>
  );

  return (
    <div styleName={styleName}>
      {poster && posterPreview}
      <div styleName="tags">
        <div styleName="tags__base">{baseTags}</div>
        <div styleName="tags__end">{endTags}</div>
      </div>
    </div>
  );
};

SharePreview.propTypes = {
  tags: shareEditorTagsType.isRequired,
  poster: oneOf(['', 'story', 'square', 'rectangle']).isRequired,
};

export default SharePreview;
