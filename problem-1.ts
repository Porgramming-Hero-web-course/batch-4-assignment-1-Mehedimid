const sumArray  = ( elementsArray : number[]) : number => { 
    const sum = elementsArray.reduce((acc, currentValue)=> acc+currentValue, 0)
    return sum
 }