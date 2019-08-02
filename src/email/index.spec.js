import { maskEmail } from '.';

describe('email transforms', () => {
  describe('maskEmail', () => {
    test.each([
      [undefined, ''],
      ['', ''],
      ['hello@gmail.com', 'h****o@gmail.com'],
      ['american@express.com', 'a****n@express.com'],
    ])(
      'masks email %p to %p',
      (input, expected) => {
        expect(maskEmail(input)).toEqual(expected);
      }
    );
  });
});
