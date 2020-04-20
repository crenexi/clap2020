// import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logger from 'services/logger';

const useBreakpoint = (key = '') => {
  const theme = useTheme();

  // Create the breakpoint keys0
  const marks = ['xs', 'sm', 'md', 'lg', 'xl'];
  const gtKeys = marks.map(k => `gt-${k}`).splice(0, marks.length - 1);
  const ltKeys = marks.map(k => `lt-${k}`).slice(1);
  const keys = [...marks, ...gtKeys, ...ltKeys];

  // Ensure valid key is supplied
  if (!keys.includes(key)) {
    logger.error(`Key ${key} invalid for useBreakpoint hook`);
    return false;
  }

  if (key.includes('-')) {
    const [prefix, mark] = key.split('-');

    if (prefix === 'gt') {
      const from = marks[marks.indexOf(mark) + 1];
      return useMediaQuery(theme.breakpoints.up(from));
    }

    if (prefix === 'lt') {
      const from = marks[marks.indexOf(mark) - 1];
      return useMediaQuery(theme.breakpoints.down(from));
    }
  }
  logger.info(key);
  return useMediaQuery(theme.breakpoints.only(key));
};

export default useBreakpoint;
