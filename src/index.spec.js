import * as Src from '.';

describe('public api', () => {
  it.each(
    [
      ['maskCurrency'],
      ['unmaskCurrency'],
      ['maskDateOfBirth'],
      ['unmaskDateOfBirth'],
      ['maskEmail'],
      ['maskPhoneNumber'],
      ['unmaskPhoneNumber'],
      ['maskSocialSecurityNumber'],
      ['unmaskSocialSecurityNumber'],
      ['filterNumeric'],
    ])(
    'has public export %s',
    (key) => {
      expect(Src[key]).toBeInstanceOf(Function);
    });
});
