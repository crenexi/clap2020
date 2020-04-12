import React from 'react';
import shareEditorTagsType from 'types/share-editor-tags';
import shareEditorOptionsType from 'types/share-editor-options';
import shareEditorActionsType from 'types/share-editor-actions';
import SharePreview from './SharePreview';
import ShareOptions from './ShareOptions';
import './ShareEditorView.scss';

const ShareEditorView = ({ tags, options, actions }) => (
  <div styleName="editor">
    <div styleName="editor__preview">
      <SharePreview tags={tags} />
    </div>
    <div styleName="editor__options">
      <ShareOptions options={options} actions={actions} />
    </div>
  </div>
);

ShareEditorView.propTypes = {
  tags: shareEditorTagsType.isRequired,
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default ShareEditorView;
