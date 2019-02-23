import * as actionTypes from 'constants/actionTypes';
import graphql          from 'lib/api/graphql';
import playersQuery     from 'graphQL/queries/players';

export default {
  startApp : () => (dispatch) => dispatch({
    type    : actionTypes.START_APP,
    payload : graphql(playersQuery),
  }),
};
