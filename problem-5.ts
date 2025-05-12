
{
const numbers: number[] = [3, 6, 8, 11, 14, 17, 20, 23, 34, 2];

const sumOfTheEvenNumbers = (nums: number[]): number => {
  return nums.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
};

const result = sumOfTheEvenNumbers(numbers);

console.log(result);

}