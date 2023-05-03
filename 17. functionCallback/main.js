/**
 * Created by Victor Isaikin
 */
const salary = [10000, 300000, 450000, 35000, 120000, 55000];

function callback(f, array) {
  return f(array);
}

const f1 = function (array) {
  let result = 0;
  let index = 0;

  while (index++ < array.length) {
    if (result < array[index]) {
      result = array[index];
    }
  }
  return result;
};

const result = callback(f1, salary);

console.log(result);
