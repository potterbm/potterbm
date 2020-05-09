import * as appPropTypes        from 'constants/propTypes';
import sortPlayersByWinnings    from 'lib/sortPlayersByWinnings';
import PlayerList               from './PlayerList';
import React, { PureComponent } from 'react';

export default class SortedPlayerList extends PureComponent {
  static propTypes = {
    players : appPropTypes.players,
  }

  render() {
    const { players } = this.props;

    return <PlayerList players={ sortPlayersByWinnings(players) } />;
  }
}
