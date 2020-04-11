import React from 'react';
// import useContent from 'hooks/use-content';
import ShareNow from 'components/shared/ShareNow';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  // const { aboveTheFold: content, baseTags } = useContent();

  return (
    <div styleName="atf">
      <ShareNow />
    </div>
  );
};

export default AboveTheFold;
