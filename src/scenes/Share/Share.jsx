import React, { Fragment } from 'react';
import routerMatchType from '@types/router-match-type';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Button, QuickNavBar, Error404 } from '@components/ui';
import { ThankYouHeading } from '@components/campaign';
import ShareNav from './Nav';
import ShareIntro from './Intro';
import ShareNow from './Now';
import SharePress from './Press';
import SharePosters from './Posters';

const Share = ({ match }) => {
  const routesData = [
    { relativePath: '/', component: ShareIntro },
    { relativePath: '/social', component: ShareNow },
    { relativePath: '/posters', component: SharePosters },
    { relativePath: '/press', component: SharePress },
  ];

  const routes = routesData.map(({ relativePath, component }) => {
    const path = match.path + relativePath;
    return <Route exact key={path} path={path} component={component} />;
  });

  const quickNavItems = [
    <Button
      to="/?scrollTo=thisIsWar"
      variant="secondary"
      startIcon="question-circle"
    >
      Wait, why Clap?
    </Button>,
    <Button
      to="/praise"
      variant="secondary"
      startIcon="star-of-life"
    >
      Groups to Thank
    </Button>,
  ];

  const quickNavBar = <QuickNavBar items={quickNavItems} inverted />;

  return (
    <Fragment>
      <ShareNav />
      <Switch>
        {routes}
        <Route render={() => <Error404 backTo={match.path} />} />
      </Switch>
      {quickNavBar}
      <ThankYouHeading />
    </Fragment>
  );
};

Share.propTypes = {
  match: routerMatchType.isRequired,
};

export default withRouter(Share);
