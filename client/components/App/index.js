import * as ReactRouter         from 'react-router-dom';
import EditPlayer               from '../pages/EditPlayer';
import Players                  from '../pages/Players';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default ReactRouter.withRouter(class App extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <ReactRouter.Switch>
          <ReactRouter.Route component={ EditPlayer } exact path="/players/edit/:id" />
          <ReactRouter.Route component={ EditPlayer } exact path="/players/add" />
          <ReactRouter.Route component={ Players } exact path="/players" />
          <ReactRouter.Route component={ Players } exact path="/" />
          <ReactRouter.Redirect to="/players" />
        </ReactRouter.Switch>
      </div>
    );
  }
});
