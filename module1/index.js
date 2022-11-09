//* Write an algorithm that takes an array of numbers as input and
//* calculates the sum of those numbers.
//* Define the Time Complexity of that algorithm and determine
//* what the lowest possible Time Complexity is for this problem

function sumOfArray(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  return result;
}

sumOfArray([1, 3, 6]);
