/**
 * Created by Victor Isaikin
 */
let sum = 2000;

if (sum >= 10000 || sum == 3000) {
  console.log('I will buy a book');
} else if (sum == 2001) {
  console.log('I will buy a lot of books');
} else if ((sum == 2000 && sum > 3000) || sum > 10000) {
  console.log('I will buy 100 books');
} else {
  console.log('I will not a buy a book');
}

sum == 2001 || sum <= 3000
  ? console.log('I have 5000')
  : console.log('I dont have a money');

let b = false;
console.log(!b);
// console.log(!!b);

// if (!!b) {
//   console.log('I am here');
// }
