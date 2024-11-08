{
    class Car {
        constructor(public make: string, public model: string, public year:number) {}
        getCarAge = () => {
            const date = new Date()
            const carAge = date.getFullYear()-this.year ;
            return carAge
        }
    }
    


}