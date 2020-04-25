import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CopyPoster from './CopyPoster';

// Help determine poster URL
const qualitiesMeta = [
  { key: 'url', value: 'standard' },
  { key: 'hdUrl', value: 'high-def' },
  { key: 'bwUrl', value: 'black/white' },
];

const CopyPosterContainer = () => {
  const { title, brief, footnote, posters } = useSelector((s) => {
    const { copyPoster } = s.scenes.share.intro;

    return {
      title: copyPoster.title,
      brief: copyPoster.brief,
      footnote: copyPoster.footnote,
      posters: s.campaign.posters,
    };
  });

  // Poster selection state
  const [selection, setSelection] = useState({
    format: 'square',
    quality: 'standard',
  });

  // Result url
  const [selectionUrl, setSelectionUrl] = useState('');

  // Set result URL
  useEffect(() => {
    const { format, quality } = selection;

    // Find poster data and quality meta
    const poster = posters.find(p => p.format === format);
    const qualityMeta = qualitiesMeta.find(q => q.value === quality);
    if (!poster || !qualityMeta) return;

    setSelectionUrl(poster[qualityMeta.key]);
  }, [selection]);

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
      selectionUrl={selectionUrl}
      onChange={handleChange}
    />
  );
};

export default CopyPosterContainer;
