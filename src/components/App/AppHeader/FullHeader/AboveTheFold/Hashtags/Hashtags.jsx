import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/shared/IconButton';
import StateSelect from './StateSelect';
import './Hashtags.scss';

const Hashtags = ({ baseTags }) => {
  const [stateTag, setStateTag] = useState('#NewYork');

  const handleCopy = () => {};

  return (
    <div styleName="hashtags">
      <div styleName="tags">
        <div styleName="tags__text">{baseTags} {stateTag}</div>
        <div styleName="tags__copy">
          <IconButton
            variant="white"
            size="medium"
            icon="copy"
            click={handleCopy}
          />
        </div>
      </div>
      <div styleName="options">
        <div styleName="options__item">
          <StateSelect
            value={stateTag}
            change={val => setStateTag(val)}
          />
        </div>
      </div>
    </div>
  );
};

Hashtags.propTypes = {
  baseTags: PropTypes.string.isRequired,
};

export default Hashtags;
