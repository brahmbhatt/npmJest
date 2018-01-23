let bowlingScore = require('./bowling');
let arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let arr1 = [10,10,10,10,10,10,10,10,10,10,2,3];
let arr2 = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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


});
