module.exports = function bowlingScore(arr)
{
  if(arr.length === 10)
    return -1;
  let i=0;
  let j=i+1;
  let roundTotal = 0;
  let result = 0;
  while(i<arr.length && j< arr.length)
  {
    if(arr[i]!==10)
    {

      roundTotal = arr[i]+arr[j];
      if(roundTotal === 10)
      {
        roundTotal = roundTotal + arr[j+1];
      }

      result = result + roundTotal;
      roundTotal=0;
      i=i+2;
      j=j+2;
    }
    else
    {
      roundTotal = 10 + arr[j] + arr[j+1];
      result = result + roundTotal;
      roundTotal = 0;
      i = i+1;
      j = j+1;
    }
  }

  return result;
};

// arr = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
//
// console.log(bowlingScore(arr));
