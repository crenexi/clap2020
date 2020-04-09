import PropTypes, { shape } from 'prop-types';

const praiseTweet = shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
});

export default praiseTweet;
