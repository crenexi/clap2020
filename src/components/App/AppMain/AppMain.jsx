import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Design from 'components/scenes/Design';
import withAnalyticsTracker from 'utils/with-analytics-tracker';

const Home = () => <h1>Hello World</h1>;

const AppMain = () => {
  const routesData = [
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
