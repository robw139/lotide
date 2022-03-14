// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual')

const head = function(arr){
  return(arr[0]);
}

const tail = function(arr){
  return(arr.slice(1,arr.length));
}
// test one
assertEqual(head(["Bootcamp","light","house"]), "Bootcamp");
assertEqual(head([1,2,3,4]),2);

let test = [1,2,3,4,5,6,7];
console.log(tail(test));
console.log(test);