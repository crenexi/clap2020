import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CopyPoster from './CopyPoster';

const CopyPosterContainer = () => {
  const { title, brief, footnote } = useSelector((s) => {
    return s.scenes.share.intro.copyPoster;
  });

  // Poster selection state
  const [selection, setSelection] = useState({
    format: 'square',
    quality: 'standard',
  });

  // Handle selection change
  const handleChange = (changes) => {
    setSelection({ ...selection, ...changes });
  };

  return (
    <CopyPoster
      title={title}
      brief={brief}
      footnote={footnote}
      selection={selection}
      onChange={handleChange}
    />
  );
};

export default CopyPosterContainer;
