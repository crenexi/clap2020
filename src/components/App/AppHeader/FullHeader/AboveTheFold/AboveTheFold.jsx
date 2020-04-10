import React from 'react';
import useContent from 'hooks/use-content';
import Hashtags from './Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  const { aboveTheFold: content } = useContent();
  const { baseTags } = content;

  return (
    <div styleName="atf">
      <Hashtags baseTags={baseTags} />
    </div>
  );
};

export default AboveTheFold;
