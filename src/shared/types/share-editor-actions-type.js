import PropTypes, { shape } from 'prop-types';

const shareEditorActionsType = shape({
  changePoster: PropTypes.func.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
});

export default shareEditorActionsType;
