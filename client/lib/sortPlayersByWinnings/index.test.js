/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import Immutable             from 'immutable';
import sortPlayersByWinnings from './index';

const testData = {
  a : Immutable.Map({
    id   : 1,
    winnings : 100,
  }),

  b : Immutable.Map({
    id   : 2,
    winnings : 200,
  }),

  c : Immutable.Map({
    id   : 3,
    winnings : 300,
  }),
};

function reduceListToArrayOfIds(list) {
  return list.map(el => el.get('id')).toJS();
}

test('Sorts a reversed list by winnings', () => {
  const players = Immutable.List([
    testData.a,
    testData.b,
    testData.c,
  ]);

  expect(
    reduceListToArrayOfIds(
      sortPlayersByWinnings(players),
    ),
  ).toEqual([3, 2, 1]);
});

test('Sorts an already ordered list by name', () => {
  const players = Immutable.List([
    testData.c,
    testData.b,
    testData.a,
  ]);

  expect(
    reduceListToArrayOfIds(
      sortPlayersByWinnings(players),
    ),
  ).toEqual([3, 2, 1]);
});
/* eslint-enable jsx-control-statements/jsx-jcs-no-undef */
