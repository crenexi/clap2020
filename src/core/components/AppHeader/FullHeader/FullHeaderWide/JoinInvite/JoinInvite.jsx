import React from 'react';
import useBreakpoint from '@hooks/use-breakpoint';
import useContent from '@hooks/use-content';
import JoinInviteView from './JoinInviteView';

const HeaderJoinInvite = () => {
  const { joinInvite: content } = useContent();
  const isLtMd = useBreakpoint('lt-md');

  return (
    <JoinInviteView
      content={content}
      hasCountdown={isLtMd}
    />
  );
};

export default HeaderJoinInvite;
