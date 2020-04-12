import PropTypes, { shape } from 'prop-types';

const shareEditorTags = shape({
  baseTags: PropTypes.string.isRequired,
  endTags: PropTypes.string.isRequired,
});

export default shareEditorTags;
