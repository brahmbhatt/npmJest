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
});
