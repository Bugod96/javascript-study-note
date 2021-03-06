/*
  [리터럴 방식의 변수 선언 vs 생성자함수를 이용한 변수 선언]
    모든 데이터타입에는 그에 대응하는 생성자 함수가 존재함(null, undefined 제외).
    배열을 생성할 경우, 자동으로 내장 생성자함수 Array를 원형으로 삼아 생성됨.

  Array
  - 내장 생성자 함수
  - from, isArray, of 등 Array함수의 정적 메서드들이 별도로 존재.
  - prototype에 map, slice, push, forEach 등 공통적인 배열 메서드들이 존재.
  - new Array처럼 생성하든, 배열 리터럴을 생성하든 
      모든 배열들은 자동으로 Array를 원형으로 하는 인스턴스로서 생성됨.
      => 생성된 배열의 __proto__에는 Array.prototype가 그대로 참조됨.
*/
var arr = [1, 2];
console.dir(arr);
// __proto__에는 map, slice, push, forEach 등 Array.prototype의 배열 메서드들이 그대로 포함되게 됨.

console.dir(Array);
// from, isArray 등의 메서드는 Array.prototype 외부에 존재.
// => 인스턴스에는 없는 메서드들. Array 생성자 함수에서 직접 접근해야만 사용 가능.

Array.isArray(arr); // true
arr.isArray(); // Uncaught TypeError: arr.isArray is not a function

Array.prototype == arr.__proto__; // true

// -------------------------------
var arr1 = [1, 2];
Array.prototype.constructor === Array; // true
arr1.__proto__.constructor === Array; // true
arr1.constructor === Array; // true

var arr2 = new Array(3, 4);
var arr3 = new arr.constructor(5, 6);
console.log(arr2); // [3, 4]
console.log(arr3); // [5, 6]
