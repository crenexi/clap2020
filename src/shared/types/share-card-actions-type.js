import PropTypes, { shape } from 'prop-types';

const shareCardActionsType = shape({
  onSetShareState: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
});

export default shareCardActionsType;
