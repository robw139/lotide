// const eqArrays = function(arr1,arr2) {
//   if (arr1.length === arr2.length) {
//     //test = true;
//     for (let x = 0; x < arr1.length; x++){
//       if (arr1[x]!==arr2[x]){
//         return false;
//       }      
//     }
//   } else {
//     return false;
//   }
//   return true;
// }

// const assertArraysEqual = function(arr1T,arr2T){
//   if (eqArrays(arr1T,arr2T)) {
//     console.log(`😀😀😀Assertin Passed: ${arr1T} === ${arr2T}`);
//   } else {
//     console.log(`👿👿👿Assertin Failed: ${arr1T} !== ${arr2T}`);
//   }
// }

// assertArraysEqual([2,2,3],[1,2,3]);



const middle = function(arr){
  arrInside = arr.slice();
  if (arr.length === 1){
    return [];
  }
  if (arr.length === 2){
    return [];
  }
  if (arr.length % 2 === 1){
    return arrInside.splice([Math.floor(arr.length/2)],1);
  }
  if (arr.length % 2 === 0){
    return arrInside.splice([Math.floor(arr.length/2)]-1,2);
  }

}

// testArray = [1,2,3,4,5]

// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1,2]),[]));
// console.log(assertArraysEqual(middle(testArray),[3]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]));
// console.log(testArray)

modules.export = middle;
