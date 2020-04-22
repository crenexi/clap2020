import React, { Suspense, lazy } from 'react';
import { LoadingScene } from '@components/ui';

const LazyGetReady = lazy(() => import('./GetReadyContainer'));

const GetReadyAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyGetReady />
  </Suspense>
);

export default GetReadyAsync;
