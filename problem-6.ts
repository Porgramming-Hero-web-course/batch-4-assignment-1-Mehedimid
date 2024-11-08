 {
    interface Profile {
        name : string,
        age : number, 
        email : string
    }
    
    type ProfileOptional = {
        [T in keyof Profile]? : Profile[T]
    }
    
    const updateProfile = (mainProfile : Profile , updates : ProfileOptional) : Profile => { 
        const newProfile = {...mainProfile, ...updates}
        return newProfile
     }
    


 }