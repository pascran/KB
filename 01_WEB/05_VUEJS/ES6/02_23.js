let obj1 = { name: '박문수', age: 29 };
let obj2 = { ...obj1, email: 'mspar@g' };
console.log(obj2);

let arr1 = [100, 200, 300];
let arr2 = ['hello', ...arr1, 'bye'];
console.log(arr1);
console.log(arr2);
