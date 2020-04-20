import React, { Suspense, lazy } from 'react';
import LoadingScene from 'components/shared/LoadingScene';

const LazyDesign = lazy(() => import('./Design'));

const DesignAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyDesign />
  </Suspense>
);

export default DesignAsync;
