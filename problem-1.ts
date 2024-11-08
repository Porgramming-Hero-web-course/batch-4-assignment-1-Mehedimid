const sumArray  = ( elementsArray : number[]) : number => { 
    const sum = elementsArray.reduce((acc, currentValue)=> acc+currentValue, 0)
    return sum
 }
// console.log( sumArray([1, 2, 3, 4, 5]));