{

const squareTheNumber = (num: number): number => num * num;
const doubleTheNumber = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const composedFunction = (num: number): number => {
  const square = squareTheNumber(num);
  const doubled = doubleTheNumber(square);
  return addFive(doubled);
};

const result = composedFunction(4); 

console.log(result)

}