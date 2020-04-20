import React, { Suspense, lazy } from 'react';
import LoadingScene from 'components/shared/LoadingScene';

const LazyPraise = lazy(() => import('./Praise'));

const PraiseAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyPraise />
  </Suspense>
);

export default PraiseAsync;
