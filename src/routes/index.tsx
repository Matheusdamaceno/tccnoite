import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SingIn from '../pages/SignIn';
import SingUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form/form';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/singUp" component={SingUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/Form" component={Form} />
  </Switch>
);

export default Routes;
