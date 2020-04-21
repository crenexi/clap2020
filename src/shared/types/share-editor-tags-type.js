import PropTypes, { shape } from 'prop-types';

const shareEditorTagsType = shape({
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
});

export default shareEditorTagsType;
