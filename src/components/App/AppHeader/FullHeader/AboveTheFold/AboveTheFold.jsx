import React from 'react';
// import useContent from 'hooks/use-content';
import ShareInviteCard from 'components/shared/ShareInviteCard';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  // const { aboveTheFold: content, baseTags } = useContent();

  return (
    <div styleName="atf">
      <ShareInviteCard />
    </div>
  );
};

export default AboveTheFold;
