import React from 'react';
import { useSelector } from 'react-redux';
import { stringifyHashtags } from '@helpers';
import QuickShare from './QuickShare';

const QuickShareContainer = () => {
  const { title, brief, tags, tagsExtended } = useSelector(s => ({
    title: s.scenes.share.social.quickShare.title,
    brief: s.scenes.share.social.quickShare.brief,
    tags: s.campaign.tags.list,
    tagsExtended: s.campaign.tags.listExtended,
  }));

  const tagsText = {
    minimal: stringifyHashtags(tags),
    all: stringifyHashtags(tagsExtended),
  };

  return (
    <QuickShare
      title={title}
      brief={brief}
      tagsText={tagsText}
    />
  );
};

export default QuickShareContainer;
