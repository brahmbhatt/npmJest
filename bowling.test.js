let bowlingScore = require('./bowling');
arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
// describe('bowling score', () => {
test('score is ', () => {
  expect(bowlingScore(arr)).toBe(90);
});
