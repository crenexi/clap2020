import React from 'react';
// import useContent from 'hooks/use-content';
import Hashtags from 'components/shared/Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  // const { aboveTheFold: content, locations } = useContent();

  return (
    <div styleName="atf">
      <Hashtags />
    </div>
  );
};

export default AboveTheFold;
