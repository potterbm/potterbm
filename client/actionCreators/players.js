import * as actionTypes     from 'constants/actionTypes';
import graphql              from 'lib/api/graphql';
import updatePlayerMutation from 'graphQL/mutations/updatePlayer';

export default {
  save: ({
    email,
    firstName,
    id,
    lastName,
    photo,
    winnings,
  }) => (dispatch) => dispatch({
    type    : actionTypes.PLAYER__SAVE,
    payload : graphql(updatePlayerMutation, {
      email,
      firstName,
      id,
      lastName,
      photo,
      winnings : parseFloat(winnings),
    }),
    meta : {
      isNewPlayer : !id,
    },
  }),
};
