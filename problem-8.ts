{
const  validateKeys = <T>(obj:T, keys: (keyof T)[]) => { 
        const isValidate = keys.every(item => item in (obj as object))
        return isValidate
     }


}