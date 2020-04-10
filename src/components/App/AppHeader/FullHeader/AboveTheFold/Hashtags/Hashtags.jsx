import React, { useState } from 'react';
import PropTypes, { arrayOf, shape } from 'prop-types';
import HashtagsView from './HashtagsView';

const Hashtags = (props) => {
  const { baseTags, cities, states } = props;

  // State
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
  cities: arrayOf(shape({
    name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  states: arrayOf(PropTypes.string).isRequired,
};

export default Hashtags;
