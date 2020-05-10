import { hot } from 'react-hot-loader/root';

import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Sidebar from '../Sidebar';
import Home from '../pages/Home';
import styles from './styles.scss';

export default hot(() => (
  <div className={styles.Root}>
    <Route>
      <Sidebar />
    </Route>

    <Switch>
      <Route component={Home} path="/" />
    </Switch>
  </div>
));
