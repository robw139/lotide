const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀Assertin Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿Assertin Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    //test = true;
    for (let x = 0; x < arr1.length; x++){
      if (arr1[x]!==arr2[x]){
        return false;
      }      
    }
  } else {
    return false;
  }
  return true;
}

const eqObjects = function(object1, object2) {
  test = []

  for (const key in object1){
    if (Array.isArray(object1[key]) & Array.isArray(object2[key]) ){
      if (eqArrays(object1[key],object2[key])){
        test.push(true);
        }
    }
    else if (object1[key]=== object2[key]){
    test.push(true);
    }
  }

  if (test.length === Object.keys(object2).length){
    for (let x = 0; x<test.length;x++){
      if (test[x] = false){
        return false
      }
    }
    return true
  }else{
  return false
}
 
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc),false) ;// => false

const bc = { a: "1", b: "2", c: "3"};
const cb = { b: "2", a: "1", c: "4"};
assertObjectsEqual(eqObjects(bc, cb),false); // => true

const cd = { c: "1", d: ["2",3] };
const dc = { d: ["2",3] , c: "1" };
assertObjectsEqual(eqObjects(ab, ba),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2),false); // => false