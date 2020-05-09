import * as appPropTypes        from 'constants/propTypes';
import Form                     from 'components/PlayerForm';
import getProps                 from 'containers/getProps';
import React, { PureComponent } from 'react';
import styles                   from './styles';
import Title                    from 'components/Title';

export default getProps('players', 'playersActions')(class EditPlayer extends PureComponent {
  static propTypes = {
    history        : appPropTypes.history,
    match          : appPropTypes.match,
    players        : appPropTypes.playerState,
    playersActions : appPropTypes.actions,
  }

  componentDidUpdate(prevProps) {
    const wasSaving = prevProps.players.get('isSaving');
    const isSaving = this.props.players.get('isSaving');

    if (wasSaving && !isSaving) this.props.history.push('/players');
  }

  getPlayerToEdit() {
    const { match, players } = this.props;
    if (!match.params.id) return null;

    // Comparing as strings because URL parameters are strings
    return players.get('loaded').find(player => `${player.get('id')}` === match.params.id) || null;
  }

  submit = (newPlayer) => {
    const playerToEdit = this.getPlayerToEdit();

    if (playerToEdit === null) return this.props.playersActions.save(newPlayer);

    return this.props.playersActions.save({
      ...newPlayer,
      id : playerToEdit.get('id'),
    });
  }

  render() {
    const { players } = this.props;

    return (
      <div className={ styles.Root }>
        <Title title="Add a player" />

        <Form
          isSaving={ players.get('isSaving') }
          onSubmit={ this.submit }
          player={ this.getPlayerToEdit() }
        />
      </div>
    );
  }
}, true);
