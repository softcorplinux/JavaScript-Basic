/**
 * Created by Victor Isaikin
 */
// function greet(greeting = 'Hello') {
//   return greeting;
// }

// function welcome(name, greeting) {
//   return `${greet(greeting)} ${name}`;
// }

// console.log(welcome('Victor'));
// console.log(welcome('Denis', 'Hola'));
// console.log(welcome('Natalia', 'Good morning'));
// console.log('-----------------');
// console.log(greet());
// console.log(greet('Good night'));

function power(x, n) {
  let index = 1;
  let result = 1.0;

  if (n >= 0) {
    while (index++ <= n) {
      result *= x;
    }
  } else {
    while (index++ <= Math.abs(n)) {
      result /= x;
    }
  }

  return result;
}

console.log(power(8, -3));
console.log(Math.pow(8, -3));
