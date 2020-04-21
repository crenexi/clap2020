import React, { Suspense, lazy } from 'react';
import LoadingScene from '@components/shared/LoadingScene';

const LazyGetReady = lazy(() => import('./GetReady'));

const GetReadyAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyGetReady />
  </Suspense>
);

export default GetReadyAsync;
