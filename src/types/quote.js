import PropTypes, { shape } from 'prop-types';

const quote = shape({
  text: PropTypes.string.isRequired,
  author: {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  },
});

export default quote;
