import React, { Fragment } from 'react';
import FullHeaderNarrow from './FullHeaderNarrow';
import FullHeaderWide from './FullHeaderWide';

const FullHeader = () => {
  return (
    <Fragment>
      <FullHeaderNarrow />
      <FullHeaderWide />
    </Fragment>
  );
};

export default FullHeader;
