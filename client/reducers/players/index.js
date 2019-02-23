import * as actionTypes from 'constants/actionTypes';
import createReducer    from '../createReducer';
import Immutable        from 'immutable';
import initialState     from './initialState';

function addPlayer(newPlayer, list) {
  return list.push(Immutable.fromJS(newPlayer));
}

function replacePlayerById(newPlayer, list) {
  return list.map(player => {
    if (player.get('id') !== newPlayer.id) return player;
    return Immutable.fromJS(newPlayer);
  });
}

export default createReducer(initialState, {
  [actionTypes.START_APP_PENDING]: (state) => state.set('areLoading', true),
  [actionTypes.START_APP_FULFILLED]: (state, { payload: { data } }) => state.merge({
    areLoading : false,
    loaded     : Immutable.fromJS(data.players),
  }),

  [actionTypes.PLAYER__SAVE_PENDING]: (state) => state.set('isSaving', true),
  [actionTypes.PLAYER__SAVE_FULFILLED]: (state, { payload, meta }) => {
    const updateListFunction = meta.isNewPlayer ? addPlayer : replacePlayerById;

    return state.set('isSaving', false).updateIn(
      ['loaded'],
      updateListFunction.bind(null, payload.data.updatePlayer),
    );
  },
});
