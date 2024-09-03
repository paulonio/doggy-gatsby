export const isEqualStrings = (firstString: string, secondString: string) => {
  return firstString === secondString;
};

export const removeLeadingSlash = (string: string) => {
  return string.replace('/', '');
};
