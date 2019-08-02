import { maskCurrency, unmaskCurrency } from '.';

describe('currency transforms', () => {
  describe('maskCurrency', () => {
    it.each([
      ['123', '123'],
      ['1234', '1,234'],
      ['123456', '123,456'],
      ['123456789', '123,456,789'],
    ])(
      'masks currency %p to %p',
      (input, expected) => {
        expect(maskCurrency(input)).toEqual(expected);
      });

    it('supports custom delimiter with the second param', () => {
      expect(maskCurrency('123456', '.')).toEqual('123.456');
      expect(maskCurrency('123456789', '.')).toEqual('123.456.789');
    });
  });

  describe('unmaskCurrency', () => {
    it.each([
      ['123', '123'],
      ['1,234', '1234'],
      ['123,456', '123456'],
      ['123,456,789', '123456789'],
    ])(
      'unmasks currency %p to %p',
      (input, expected) => {
        expect(unmaskCurrency(input)).toEqual(expected);
      });
  });
});
