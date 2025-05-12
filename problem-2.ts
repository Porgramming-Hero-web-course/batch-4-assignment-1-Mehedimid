 {
type TBook = { title: string; author: string; year: number };

const books: TBook[] = [
  { title: "নদীর নাম মধুমতি", author: "হুমায়ূন আহমেদ", year: 1995 },
  { title: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", year: 1929 },
  { title: "সোনার তরী", author: "রবীন্দ্রনাথ ঠাকুর", year: 1894 },
];

const bookNames = books.map(book => book.title);
console.log(bookNames);
 }