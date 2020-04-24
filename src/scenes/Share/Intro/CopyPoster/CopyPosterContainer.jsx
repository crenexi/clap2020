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
    isBlackWhite: false,
  });

  // Handle selection change
  const handleFormatChange = (format) => {
    setSelection({ ...selection, format });
  };

  return (
    <CopyPoster
      title={title}
      brief={brief}
      footnote={footnote}
      selection={selection}
      onFormatChange={handleFormatChange}
    />
  );
};

export default CopyPosterContainer;
