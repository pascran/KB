// function swap(numbers) {
//   let temp = numbers[0];
//   numbers[0] = numbers[1];
//   number[1] = temp;
//   console.log(`swap 함수안 -> numbers: ${numbers}`);
// }
// let arr = [100, 200];
// console.log(`swap 호출전 -> arr : ${arr}`);
// swap(arr);
// console.log(`swap 호출후 -> arr : ${arr}`);

import user from './user.js'; // 확장자를 포함한 파일 경로로 수정
// console.log(user);
const hello = (name) => {
  console.log(`${name} 님 안녕하세요?`);
};

export default hello;
