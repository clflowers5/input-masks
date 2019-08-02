import { maskPhoneNumber, unmaskPhoneNumber } from '.';

describe('phone-number transforms', () => {
  describe('maskPhoneNumber', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['100', '100-'],
        ['1008', '100-8'],
        ['100867', '100-867-'],
        ['1008675', '100-867-5'],
        ['1008675309', '100-867-5309'],
        ['100-', '100-'],
        ['100-867', '100-867-'],
        ['100-867-', '100-867-'],
        ['100-867-5', '100-867-5'],
        ['100-867-5309', '100-867-5309'],
      ])(
      'masks phone number %p to %p',
      (input, expected) => {
        expect(maskPhoneNumber(input)).toEqual(expected);
      }
    );

    it.each(
      [
        ['a', ''],
        ['100a', '100-'],
        ['1008a', '100-8'],
        ['100867ab', '100-867-'],
        ['1008675abc', '100-867-5'],
        ['1008675309afaf', '100-867-5309'],
        ['100-abc', '100-'],
        ['100-867please', '100-867-'],
        ['100-867-save', '100-867-'],
        ['100-867-5the', '100-867-5'],
        ['100-867-5309cheese', '100-867-5309'],
        ['hello100-867-5309', '100-867-5309'],
      ])(
      'filters non-numeric characters. formats %p to %p',
      (input, expected) => {
        expect(maskPhoneNumber(input)).toEqual(expected);
      }
    );

    it('supports custom delimiter with the second param', () => {
      expect(maskPhoneNumber('1234567890', '*')).toEqual('123*456*7890');
      expect(maskPhoneNumber('12345678909', '_')).toEqual('123_456_7890');
    });
  });

  describe('unmaskPhoneNumber', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['100-', '100'],
        ['100-8', '1008'],
        ['100-867-', '100867'],
        ['100-867-5', '1008675'],
        ['100-867-5309', '1008675309'],
        ['100-', '100'],
        ['100-867-', '100867'],
        ['100-867-', '100867'],
        ['100-867-5', '1008675'],
        ['100-867-5309', '1008675309'],
      ])(
      'unmasks phone number %p to %p',
      (input, expected) => {
        expect(unmaskPhoneNumber(input)).toEqual(expected);
      }
    );
  });
});
