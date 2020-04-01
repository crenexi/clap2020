import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/scenes/Home';
import Share from 'components/scenes/Share';
import Latest from 'components/scenes/Latest';
import Countdown from 'components/scenes/Countdown';
import Design from 'components/scenes/Design';
import withAnalyticsTracker from 'utils/with-analytics-tracker';

const AppMain = () => {
  const routesData = [
    { path: '/share', component: Share },
    { path: '/latest', component: Latest },
    { path: '/countdown', component: Countdown },
    { path: '/design', component: Design },
  ];

  const routes = routesData.map(({ path, component }) => {
    const compWithTracker = withAnalyticsTracker(component);
    return <Route key={path} path={path} component={compWithTracker} />;
  });

  return (
    <main>
      <Switch>
        <Route exact path="/" component={withAnalyticsTracker(Home)} />
        {routes}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default AppMain;
