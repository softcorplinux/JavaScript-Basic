/**
 * Created by Victor Isaikin
 */

function sum() {
  let n1 = 2;
  let n2 = 2;
  return n1 + n2;
}

console.log('RESULT');

const s1 = sum();
const s2 = sum();
console.log(s1);
console.log(s2);

console.log('LINK');

const s3 = sum;
const s4 = sum;
console.log(s3());
console.log(s4());
