import React from 'react';
import useContent from 'hooks/use-content';
import JoinInviteView from './JoinInviteView';

const HeaderJoinInvite = () => {
  const { joinInvite: content } = useContent();

  return <JoinInviteView content={content} />;
};

export default HeaderJoinInvite;
