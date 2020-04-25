import { shape, oneOf } from 'prop-types';

const posterSelectionType = shape({
  format: oneOf(['story', 'square', 'rectangle']).isRequired,
  quality: oneOf(['standard', 'high-def', 'black/white']),
});

export default posterSelectionType;
