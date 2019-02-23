/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
import camelCaseToTitleCase from './index';

const testData = {
  a : 'camelCaseToTitleCase',

  b : 'not-a-camel-case-string',

  c : '',
};

test('Converts camel case to title case', () => {
  expect(camelCaseToTitleCase(testData.a)).toEqual('Camel Case To Title Case');
});

test('Does not convert a string not in title case', () => {
  expect(camelCaseToTitleCase(testData.b)).toEqual('Not-a-camel-case-string');
});

test('Does nothing with an empty string', () => {
  expect(camelCaseToTitleCase(testData.c)).toEqual('');
});
/* eslint-enable jsx-control-statements/jsx-jcs-no-undef */
