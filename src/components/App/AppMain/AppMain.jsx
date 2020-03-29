import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Design from 'components/scenes/Design';

const Home = () => <h1>Hello World</h1>;

const AppMain = () => {
  const routes = [
    // { path: '/design', component: Design },
  ];

  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default AppMain;
