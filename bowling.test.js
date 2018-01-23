let bowlingScore = require('./bowling');
let arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let arr1 = [10,10,10,10,10,10,10,10,10,10,2,3];
let arr2 = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
let arr4 = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr5 = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
let arr7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
let arr8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
let arr9 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let arr10 = [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr11 = [1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr12 = [5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr13 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,6,3,3];
let arr14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr15 = [1,2,3,4];
describe('bowling score', () => {
  test('score is ', () => {
    expect(bowlingScore(arr)).toBe(90);
  });

  test('for no strik or spare', () => {
    expect(bowlingScore(arr1)).toBe(277);
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

  test('three striks back to back', () => {
    expect(bowlingScore(arr5)).toBe(81);
  });

  test('strik at the end', () => {
    expect(bowlingScore(arr6)).toBe(20);
  });

  test('three strik at the end', () => {
    expect(bowlingScore(arr7)).toBe(30);
  });

  test('spare at the end', () => {
    expect(bowlingScore(arr8)).toBe(20);
  });

  test('for all striks', () => {
    expect(bowlingScore(arr9)).toBe(300);
  });

  test('for negative score', () => {
    expect(bowlingScore(arr10)).toBe(-1);
  });

  test('for score moer than 10 tiles in one shot', () => {
    expect(bowlingScore(arr11)).toBe(-1);
  });

  test('for score moer than 10 tiles in one round', () => {
    expect(bowlingScore(arr12)).toBe(-1);
  });

  test('for rounds more than 10 without strike or spare at the end', () => {
    expect(bowlingScore(arr13)).toBe(-1);
  });

  test('all zeros', () => {
    expect(bowlingScore(arr14)).toBe(0);
  });

  test('not enough rounds', () => {
    expect(bowlingScore(arr15)).toBe(-1);
  });
});
