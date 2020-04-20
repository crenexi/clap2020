import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from 'components/shared/Error404';
import Home from 'components/scenes/Home';
import Praise from 'components/scenes/Praise';
import Share from 'components/scenes/Share';
import GetReady from 'components/scenes/GetReady';
import Heroes from 'components/scenes/Heroes';
import Latest from 'components/scenes/Latest';
import Design from 'components/scenes/Design';
import withAnalyticsTracker from 'utils/with-analytics-tracker';
import withOpacityDelay from 'utils/with-opacity-delay';
import './AppMain.scss';

const AppMain = () => {
  const routesData = [
    { path: '/praise', exact: true, component: Praise },
    { path: '/share', exact: false, component: Share },
    { path: '/get-ready', exact: true, component: GetReady },
    { path: '/heroes', exact: true, component: Heroes },
    { path: '/latest', exact: true, component: Latest },
    { path: '/design', exact: true, component: Design },
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
