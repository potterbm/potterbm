import * as ReactRouter         from 'react-router-dom';
import Header                   from './Header';
import Homepage                 from '../pages/Homepage';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default ReactRouter.withRouter(class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <Header />

        <ReactRouter.Switch>
          <ReactRouter.Route component={ Homepage } exact path="/" />
          <ReactRouter.Redirect to="/" />
        </ReactRouter.Switch>
      </div>
    );
  }
});
