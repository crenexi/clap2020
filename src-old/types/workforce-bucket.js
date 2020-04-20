import PropTypes, { shape, arrayOf } from 'prop-types';
import workforceGroupType from './workforce-group';
import videoEmbedType from './video-embed';

const workforceBucket = shape({
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groups: arrayOf(workforceGroupType).isRequired,
  videos: arrayOf(videoEmbedType).isRequired,
});

export default workforceBucket;
