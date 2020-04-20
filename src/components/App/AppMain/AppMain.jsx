import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    { path: '/praise', component: Praise },
    { path: '/share', component: Share },
    { path: '/get-ready', component: GetReady },
    { path: '/heroes', component: Heroes },
    { path: '/latest', component: Latest },
    { path: '/design', component: Design },
  ];

  // Add any HOCs for routes here
  const withHOCs = (component) => {
    return withAnalyticsTracker(withOpacityDelay(component));
  };

  // Routes list
  const routes = routesData.map(({ path, component }) => (
    <Route
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
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default AppMain;
