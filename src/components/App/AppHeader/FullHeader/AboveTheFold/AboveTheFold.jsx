import React from 'react';
// import useContent from 'hooks/use-content';
import Hashtags from './Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // const { aboveTheFold: content } = useContent();

  return (
    <div styleName="atf">
      <Hashtags />
    </div>
  );
};

export default AboveTheFold;
