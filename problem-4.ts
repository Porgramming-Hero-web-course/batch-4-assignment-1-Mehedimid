{
    interface ICar  { make: string; model: string; year: number };

const cars: ICar[] = [
  { make: "Toyota", model: "Prius", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "BMW", model: "320i", year: 2018 },
  { make: "Mitsubishi", model: "Lancer", year: 2010 },
];

const sortedCar = cars.sort((a, b) => a.year - b.year);

console.log(sortedCar);

}