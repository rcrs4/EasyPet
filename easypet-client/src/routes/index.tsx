import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Historico from '../pages/Historico';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/historico" component={Historico} />
  </Switch>
);

export default Routes;
