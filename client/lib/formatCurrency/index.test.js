/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import formatCurrency from './index';

const testData = {
  a : 10,

  b : 10000,

  c : 10000000,

  d : 1000.009,
};

test('Correctly formats number with no commas', () => {
  expect(formatCurrency(testData.a)).toEqual('$10.00');
});

test('Correctly formats number with one comma', () => {
  expect(formatCurrency(testData.b)).toEqual('$10,000.00');
});

test('Correctly formats number with two commas', () => {
  expect(formatCurrency(testData.c)).toEqual('$10,000,000.00');
});

test('Correctly formats number with three decimal places', () => {
  expect(formatCurrency(testData.d)).toEqual('$1,000.01');
});
/* eslint-enable jsx-control-statements/jsx-jcs-no-undef */
