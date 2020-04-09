import React from 'react';
import useContent from 'hooks/use-content';
import Hashtags from './Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  const { aboveTheFold: content } = useContent();
  const { hashtagsText } = content;

  return (
    <div styleName="atf">
      <Hashtags
        text={hashtagsText}
      />
    </div>
  );
};

export default AboveTheFold;
