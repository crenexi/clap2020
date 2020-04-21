import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from '@components/shared/Error404';
import Home from '@components/scenes/Home';
import { PraiseAsync } from '@components/scenes/Praise';
import { ShareAsync } from '@components/scenes/Share';
import { GetReadyAsync } from '@components/scenes/GetReady';
// import { HeroesAsync } from '@components/scenes/Heroes';
import { DesignAsync } from '@components/scenes/Design';
import withAnalyticsTracker from 'utils/with-analytics-tracker';
import withOpacityDelay from 'utils/with-opacity-delay';
import './AppMain.scss';

const AppMain = () => {
  const routesData = [
    { path: '/praise', exact: true, component: PraiseAsync },
    { path: '/share', exact: false, component: ShareAsync },
    { path: '/get-ready', exact: true, component: GetReadyAsync },
    // { path: '/heroes', exact: true, component: HeroesAsync },
    { path: '/design', exact: true, component: DesignAsync },
  ];

  // Add any HOCs for routes here
  const withHOCs = (component) => {
    return withAnalyticsTracker(withOpacityDelay(component));
  };

  const routes = routesData.map(({ path, exact, component }) => (
    <Route
      exact={exact}
      key={path}
      path={path}
      component={withHOCs(component)}
    />
  ));

  return (
    <main styleName="main">
      <Switch>
        <Route exact path="/" component={withHOCs(Home)} />
        {routes}
        <Route component={Error404} />
      </Switch>
    </main>
  );
};

export default AppMain;
