import React, { Suspense, lazy } from 'react';
import { LoadingScene } from '@components/ui';

const LazyDesign = lazy(() => import('./Design'));

const DesignAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyDesign />
  </Suspense>
);

export default DesignAsync;
