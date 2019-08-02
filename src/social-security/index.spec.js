import { maskSocialSecurityNumber, unmaskSocialSecurityNumber } from '.';

describe('social-security-number transforms', () => {
  describe('maskSocialSecurityNumber', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['123', '123-'],
        ['1234', '123-4'],
        ['123456', '123-45-6'],
        ['123456789', '123-45-6789'],
        ['123-', '123-'],
        ['123-45', '123-45-'],
        ['123-45-', '123-45-'],
        ['123-45-6', '123-45-6'],
        ['123-45-6789', '123-45-6789'],
      ])(
      'masks social security number %p to %p',
      (input, expected) => {
        expect(maskSocialSecurityNumber(input)).toEqual(expected);
      }
    );

    it.each(
      [
        ['a', ''],
        ['100a', '100-'],
        ['1008a', '100-8'],
        ['10086ab', '100-86-'],
        ['100875309afaf', '100-87-5309'],
        ['100-abc', '100-'],
        ['100-87please-help', '100-87-'],
        ['100-87-5the', '100-87-5'],
        ['100-87-5309cheese', '100-87-5309'],
        ['hello100-87-5309', '100-87-5309'],
      ])(
      'filters non-numeric characters. formats %p to %p',
      (input, expected) => {
        expect(maskSocialSecurityNumber(input)).toEqual(expected);
      }
    );

    it('supports custom delimiter with the second param', () => {
      expect(maskSocialSecurityNumber('123456789', '*')).toEqual('123*45*6789');
      expect(maskSocialSecurityNumber('12345678909', '_')).toEqual('123_45_6789');
    });
  });

  describe('unmaskSocialSecurityNumber', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['100-', '100'],
        ['100-8', '1008'],
        ['100-87-', '10087'],
        ['100-87-5', '100875'],
        ['100-87-5309', '100875309'],
        ['100-', '100'],
        ['100-87-', '10087'],
        ['100-87-', '10087'],
        ['100-87-5', '100875'],
        ['100-87-5309', '100875309'],
      ])(
      'unmasks social security number %p to %p',
      (input, expected) => {
        expect(unmaskSocialSecurityNumber(input)).toEqual(expected);
      }
    );
  });
});
