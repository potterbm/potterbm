import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import formatCurrency           from 'lib/formatCurrency';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class PlayerRow extends PureComponent {
  static propTypes = {
    player : appPropTypes.player,
  }

  getName() {
    const { player } = this.props;

    return `${player.get('firstName')} ${player.get('lastName')}`.trim();
  }

  render() {
    const { player } = this.props;

    return (
      <tr className={ styles.Root }>
        <td className={ styles.Number } />

        <td className={ styles.PhotoCell }>
          <div
            className={ styles.Photo }
            style={{ backgroundImage: `url(${player.get('photo')})` }}
          />
        </td>

        <td className={ styles.Name }>
          <Link to={ `/players/edit/${player.get('id')}` }>
            { this.getName() }
          </Link>
        </td>

        <td className={ styles.Winnings }>{ formatCurrency(player.get('winnings')) }</td>
      </tr>
    );
  }
}
