import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/shared/IconButton';
import StateSelect from './StateSelect';
import './Hashtags.scss';

const Hashtags = ({ text }) => {
  const handleStateChange = (value) => {
    console.log(value);
  };

  const handleCopy = () => {};

  return (
    <div styleName="hashtags">
      <div styleName="text">{text}</div>
      <div styleName="location">
        <StateSelect change={handleStateChange} />
      </div>
      <div styleName="copy-btn">
        <IconButton
          variant="white"
          size="medium"
          icon="copy"
          click={handleCopy}
        />
      </div>
    </div>
  );
};

Hashtags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Hashtags;
