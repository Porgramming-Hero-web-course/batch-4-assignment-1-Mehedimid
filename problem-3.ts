const countWordOccurrences = (sentence:string, wordParam:string) : number=> { 
    const wordCI = new RegExp(wordParam, 'gi')
    const countWord = sentence.match(wordCI)?.length  || 0
    return countWord
 }
//  console.log(countWordOccurrences("I love typescript. Typescript is key of learning", "typescript"));
