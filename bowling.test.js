let bowlingScore = require('./bowling');
let arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let arr1 = [10,10,10,10,10,10,10,10,10,10,2,3];
let arr2 = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
let arr4 = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
describe('bowling score', () => {
  test('score is ', () => {
    expect(bowlingScore(arr)).toBe(90);
  });

  test('for no strik or spare', () => {
    expect(bowlingScore(arr1)).toBe(282);
  });

  test('for all striks is ', () => {
    expect(bowlingScore(arr1)).toBe(282);
  });

  test('for one spare is :', () => {
    expect(bowlingScore(arr2)).toBe(31);
  });

  test('for one spare is :', () => {
    expect(bowlingScore(arr3)).toBe(17);
  });

  test('only one strike and all zero:', () => {
    expect(bowlingScore(arr4)).toBe(10);
  });
});
