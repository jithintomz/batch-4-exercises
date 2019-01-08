function getName(name) {
  if (typeof name === 'string') return `You entered: ${name}`;
  return 'there was an error'
}


describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('Martin Garrix');
    const expected = "You entered: Martin Garrix";
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'there was an error';
    expect(getName(123)).toMatch("there was an error");
  });
});
