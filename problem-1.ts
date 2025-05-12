{
type TPeople = { name: string; age: number; gender: "male" | "female" };

const data: TPeople[] = [
  { name: "Rakib", age: 25, gender: "male" },
  { name: "Sumaiya", age: 22, gender: "female" },
  { name: "Hasan", age: 30, gender: "male" },
  { name: "Tania", age: 28, gender: "female" },
];

const males = data.filter(p => p.gender === "male")
const names = males.map((man=>man.name))
console.log(males, names)

}