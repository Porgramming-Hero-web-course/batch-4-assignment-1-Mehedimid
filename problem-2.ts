const removeDuplicates = (numbersArray : number[]) => { 
    const filteredArray = numbersArray.filter((num, idx) => numbersArray.indexOf(num) === idx) ;
    return filteredArray
 }