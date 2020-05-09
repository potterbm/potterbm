import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import SortedPlayerList         from './SortedPlayerList';
import styles                   from './styles';
import Title                    from 'components/Title';

export default getProps('players')(class Players extends PureComponent {
  static propTypes = {
    players : appPropTypes.playerState,
  }

  render() {
    const { players } = this.props;

    return (
      <div className={ styles.Root }>
        <Title title="Leaderboard">
          <Link className={ styles.Add } to="/players/add">Add Player</Link>
        </Title>

        <SortedPlayerList players={ players.get('loaded') } />
      </div>
    );
  }
});
