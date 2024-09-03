import { isEqualStrings, removeLeadingSlash } from '@/utils/string-utils';

describe(isEqualStrings.name, () => {
  const TEST_STRING = 'test';

  it('should return `true` if string are equal', () => {
    expect(isEqualStrings(TEST_STRING, 'test')).toEqual(true);
  });

  it('should return `false` if string are not equal', () => {
    expect(isEqualStrings(TEST_STRING, '123')).toEqual(false);
  });
});

describe(removeLeadingSlash.name, () => {
  it('should remove leading slash', () => {
    const TEST_STRING = '/home';
    const EXPECTED_RESULT = 'home';

    expect(removeLeadingSlash(TEST_STRING)).toEqual(EXPECTED_RESULT);
  });

  it('should do nothing if slash is absent', () => {
    const TEST_STRING = 'home';

    expect(removeLeadingSlash(TEST_STRING)).toEqual(TEST_STRING);
  });
});
