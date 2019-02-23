import * as appPropTypes        from 'constants/propTypes';
import React, { PureComponent } from 'react';
import PlayerRow                from './PlayerRow';
import styles                   from './styles';

export default class PlayerList extends PureComponent {
  static propTypes = {
    players : appPropTypes.players,
  }

  render() {
    const { players } = this.props;

    return (
      <table className={ styles.Root }>
        <thead className={ styles.Head }>
          <tr>
            <th className={ styles.Number } />
            <th />
            <th>Player</th>
            <th className={ styles.Winnings }>Total Winnings</th>
          </tr>
        </thead>

        <tbody>
          <For each="player" of={ players }>
            <PlayerRow key={ `player-row-${player.get('id')}` } player={ player } />
          </For>
        </tbody>
      </table>
    );
  }
}
