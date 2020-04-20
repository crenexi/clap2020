import React, { Suspense, lazy } from 'react';
import LoadingScene from 'components/shared/LoadingScene';

const LazyShare = lazy(() => import('./Share'));

const ShareAsync = () => (
  <Suspense fallback={<LoadingScene />}>
    <LazyShare />
  </Suspense>
);

export default ShareAsync;
