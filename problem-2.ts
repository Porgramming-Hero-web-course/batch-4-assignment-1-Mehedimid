 {
    const removeDuplicates = (numbersArray : number[]) => { 
        const filteredArray = numbersArray.filter((num, idx) => numbersArray.indexOf(num) === idx) ;
        return filteredArray
     }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


 }