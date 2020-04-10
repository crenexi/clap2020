import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HashtagsView from './HashtagsView';
import './Hashtags.scss';

const Hashtags = ({ baseTags }) => {
  const [tags, setTags] = useState(baseTags);
  const [stateTag, setStateTag] = useState('#NewYork');
  const [cityTag, setCityTag] = useState('#NYC');

  const updateTags = () => {
    setTags(`${baseTags} ${cityTag} ${stateTag}`);
  };

  const handleChangeCityTag = (newCityTag) => {
    setCityTag(newCityTag);
    updateTags();
  };

  const handleChangeStateTag = (newStateTag) => {
    setStateTag(newStateTag);
    updateTags();
  };

  const handleCopyTags = () => {};

  return (
    <HashtagsView
      tags={tags}
      cityTag={cityTag}
      stateTag={stateTag}
      changeCityTag={handleChangeCityTag}
      changeStateTag={handleChangeStateTag}
      copyTags={handleCopyTags}
    />
  );
};

Hashtags.propTypes = {
  baseTags: PropTypes.string.isRequired,
};

export default Hashtags;
