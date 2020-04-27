import scssExports from '@helpers/scss/exports';

const createBreakpoints = () => {
  const shorten = key => key.split('breakpoint').pop().toLowerCase();
  const isBreakpointKey = ([key]) => key.includes('breakpoint');
  const withShortKey = ([key, val]) => [shorten(key), val];

  const bpEntries = Object.entries(scssExports)
    .filter(isBreakpointKey)
    .map(withShortKey);

  return bpEntries.reduce(({ keys, values }, [size, bp], index) => {
    return {
      keys: { ...keys, [index]: size },
      values: { ...values, [size]: parseInt(bp, 10) },
    };
  }, { keys: '', values: '' });
};

export default createBreakpoints;
