const countWordOccurrences = (sentence:string, wordParam:string) : number=> { 
    const re = new RegExp(wordParam, 'gi')
    const count = sentence.match(re)?.length  || 0
    return count
 }
//  console.log(countWordOccurrences("I love typescript. Typescript is key of learning", "typescript"));
