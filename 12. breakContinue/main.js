/**
 * Created by Victor Isaikin
 */
let index = 0;

parent: while (index++ < 5) {
  console.log('Index = ' + index);
  let innerIndex = 0;

  while (innerIndex++ < 5) {
    if (innerIndex === 3) {
      break parent;
    }
    console.log('-- Innder Index = ' + innerIndex);
  }
}

// while (index++ < 5) {
//   if (index === 3) {
//     continue;
//   }
//   console.log('Index = ' + index);
// }
