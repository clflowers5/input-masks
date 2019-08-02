import { maskDateOfBirth, unmaskDateOfBirth } from '.';

describe('date-of-birth transforms', () => {
  describe('maskDateOfBirth', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['11', '11/'],
        ['11/1', '11/1'],
        ['11/17', '11/17/'],
        ['11/17/', '11/17/'],
        ['11/17/1', '11/17/1'],
        ['11/17/19', '11/17/19'],
        ['11/17/190', '11/17/190'],
        ['11/17/1900', '11/17/1900'],
        ['111', '11/1'],
        ['1117', '11/17/'],
        ['111719', '11/17/19'],
      ])(
      'masks date of birth %p to %p',
      (input, expected) => {
        expect(maskDateOfBirth(input)).toEqual(expected);
      }
    );

    it.each(
      [
        ['a', ''],
        ['1a', '1'],
        ['11a', '11/'],
        ['11/1a', '11/1'],
        ['11a/17a', '11/17/'],
        ['11/17a/a', '11/17/'],
        ['11a/17a/1a', '11/17/1'],
        ['11/17/19a', '11/17/19'],
        ['11/17/190a', '11/17/190'],
        ['11/17aa/1900abc', '11/17/1900'],
        ['1a1a1', '11/1'],
        ['11a17a', '11/17/'],
        ['a1117a19a', '11/17/19'],
      ])(
      'filters non-numeric characters. formats %p to %p',
      (input, expected) => {
        expect(maskDateOfBirth(input)).toEqual(expected);
      }
    );

    it('supports custom delimiter with the second param', () => {
      expect(maskDateOfBirth('11171900', '-')).toEqual('11-17-1900');
      expect(maskDateOfBirth('11171900', '_')).toEqual('11_17_1900');
    });
  });

  describe('unmaskDateOfBirth', () => {
    it.each(
      [
        ['', ''],
        ['1', '1'],
        ['11/', '11'],
        ['11/1', '111'],
        ['11/17/', '1117'],
        ['11/17/1', '11171'],
        ['11/17/19', '111719'],
        ['11/17/190', '1117190'],
        ['11/17/1900', '11171900'],
      ])(
      'unmasks date of birth %p to %p',
      (input, expected) => {
        expect(unmaskDateOfBirth(input)).toEqual(expected);
      }
    );
  });
});
