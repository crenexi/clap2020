import PropTypes, { shape, arrayOf } from 'prop-types';
import workforceGroupType from './workforce-group-type';
import videoEmbedType from './video-embed-type';

const workforceBucketType = shape({
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groups: arrayOf(workforceGroupType).isRequired,
  videos: arrayOf(videoEmbedType).isRequired,
});

export default workforceBucketType;
