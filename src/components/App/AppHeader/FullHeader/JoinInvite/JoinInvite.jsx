import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useContent from 'hooks/use-content';
import JoinInviteView from './JoinInviteView';

const HeaderJoinInvite = () => {
  const { joinInvite: content } = useContent();

  // Media query
  const theme = useTheme();
  const isLtMd = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <JoinInviteView
      content={content}
      hasCountdown={isLtMd}
    />
  );
};

export default HeaderJoinInvite;
