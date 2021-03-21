import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import User from './pages/User';

const pages = [
  {
    component: User,
    path: '/:login',
  },
  {
    component: Main,
    path: '/',
  },
];

const Router = () => (
  <BrowserRouter>
    <Switch>
      {
        pages.map((page) => (
          <Route path={page.path} component={page.component} key={page.path} />
        ))
      }
    </Switch>
  </BrowserRouter>
);

export default Router;
