/**
 * Created by Victor Isaikin
 */
function getNumber() {
  return 100;
}

const newGestNumber = getNumber;

const number = function (x = 500) {
  return x;
};

getNumber = undefined;

console.log(getNumber === newGestNumber);
console.log(newGestNumber());
console.log(getNumber());
// console.log(getNumber());
// console.log(number());
