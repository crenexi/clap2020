import React, { Fragment } from 'react';
import routerMatchType from 'types/router-match';
import { Switch, Route } from 'react-router-dom';
import Error404 from 'components/shared/Error404';
import ShareNav from './ShareNav';
import ShareIntro from './ShareIntro';
import ShareNow from './ShareNow';
import SharePress from './SharePress';
import SharePosters from './SharePosters';

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

  return (
    <Fragment>
      <ShareNav />
      <Switch>
        {routes}
        <Route render={() => <Error404 backTo={match.path} />} />
      </Switch>
    </Fragment>
  );
};

Share.propTypes = {
  match: routerMatchType.isRequired,
};

export default Share;
