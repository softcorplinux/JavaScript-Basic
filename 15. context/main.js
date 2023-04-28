/**
 * Created by Victor Isaikin
 */
let num = 100;

function getNumber() {
  let num = 600;
  {
    let num = 800;
    console.log(num);
  }
  return num;
}

// {
//   let num = 300;
//   console.log(num);
//   {
//     let num = 500;
//     console.log(num);
//   }
// }

console.log(getNumber());
console.log(num);
