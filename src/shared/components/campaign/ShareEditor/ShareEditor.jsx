import React from 'react';
import shareEditorTagsType from '@types/share-editor-tags-type';
import shareEditorOptionsType from '@types/share-editor-options-type';
import shareEditorActionsType from '@types/share-editor-actions-type';
import Preview from './Preview';
import Options from './Options';
import './ShareEditor.scss';

const ShareEditor = ({ tags, options, actions }) => (
  <div styleName="editor">
    <div styleName="preview">
      <Preview tags={tags} poster={options.selectedPoster} />
    </div>
    <div styleName="options">
      <Options options={options} actions={actions} />
    </div>
  </div>
);

ShareEditor.propTypes = {
  tags: shareEditorTagsType.isRequired,
  options: shareEditorOptionsType.isRequired,
  actions: shareEditorActionsType.isRequired,
};

export default ShareEditor;
