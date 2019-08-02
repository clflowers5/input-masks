import { filterNumeric } from '.';

describe('filters', () => {
  describe('filterNumeric', () => {
    it.each([
      ['abc123', '123'],
      ['12345', '12345'],
      ['12-23-42', '122342'],
      ['$123.00', '12300'],
      ['23.23', '2323'],
      ['1O1', '11'], // capital character O
      ['101', '101'], // numeric zero 0
    ])(
      'filters out non-numeric characters from the input %p',
      (input, expected) => {
        expect(filterNumeric(input)).toEqual(expected);
      });
  });
});
