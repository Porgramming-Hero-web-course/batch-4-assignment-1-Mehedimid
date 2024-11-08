{
    const countWordOccurrences = (sentence:string, word:string) : number=> { 
        const wordCI = new RegExp(word, 'gi')
        const countWord = sentence.match(wordCI)?.length  || 0
        return countWord
     }



}