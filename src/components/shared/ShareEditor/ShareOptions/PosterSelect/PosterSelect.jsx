import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PosterSelect.scss';

const PosterSelect = ({ value, change }) => {
  const [truthyValue, setTruthyValue] = useState('square');
  const [enabled, setEnabled] = useState(true);

  const handleToggle = () => setEnabled(!enabled);
  const handleSelect = event => setTruthyValue(event.target.value);

  return (
    <div styleName="select-frame">
      test
    </div>
  );
};

PosterSelect.propTypes = {
  value: PropTypes.oneOf(['', 'story', 'square', 'rectanble']).isRequired,
  change: PropTypes.func.isRequired,
};

export default PosterSelect;
