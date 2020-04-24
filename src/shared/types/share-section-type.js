import PropTypes, { shape } from 'prop-types';

const shareSectionType = shape({
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  brief: PropTypes.string,
  wide: PropTypes.bool,
  narrow: PropTypes.bool,
  inverted: PropTypes.bool,
});

export default shareSectionType;
