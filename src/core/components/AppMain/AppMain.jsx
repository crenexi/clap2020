import React from 'react';
import { arrayOf } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import routeType from '@types/route-type';
import { withAnalyticsTracker, withOpacityDelay } from '@helpers/hocs';
import { Error404 } from '@components/ui';
import Home from '@scenes/Home';
import './AppMain.scss';

const AppMain = ({ routes }) => {
  // Add any HOCs for routes here
  const withHOCs = (component) => {
    return withAnalyticsTracker(withOpacityDelay(component));
  };

  return (
    <main styleName="main">
      <Switch>
        <Route exact path="/" component={withHOCs(Home)} />
        {routes.map(({ path, exact, component }) => (
          <Route
            exact={exact}
            key={path}
            path={path}
            component={withHOCs(component)}
          />
        ))}
        <Route component={Error404} />
      </Switch>
    </main>
  );
};

AppMain.propTypes = {
  routes: arrayOf(routeType).isRequired,
};

export default AppMain;
