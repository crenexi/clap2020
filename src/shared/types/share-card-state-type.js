import PropTypes, { shape } from 'prop-types';
import posterSelectionType from './poster-selection-type';

const shareCardStateType = shape({
  hasPoster: PropTypes.bool.isRequired,
  tagsText: PropTypes.string.isRequired,
  poster: posterSelectionType.isRequired,
});

export default shareCardStateType;
