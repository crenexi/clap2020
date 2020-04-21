import PropTypes, { shape } from 'prop-types';

const quoteType = shape({
  text: PropTypes.string.isRequired,
  author: shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
});

export default quoteType;
