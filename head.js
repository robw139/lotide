const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};


const head = function(arr){
  return(arr[0]);
}
// test one
assertEqual(head(["Bootcamp","light","house"]), "Bootcamp");
assertEqual(head([1,2,3,4]),2);