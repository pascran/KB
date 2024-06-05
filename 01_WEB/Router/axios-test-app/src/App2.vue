<template>
  <div>
    <h2>서브웨이</h2>
  </div>
</template>
<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';
let todoList;
const requestAPI = async () => {
  let response = await axios.get(listUrl);
  todoList = response.data;

  console.log('# TodoList:', todoList);
  for (let i = 0; i < todoList.length; i++) {
    response = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`# ${i + 1}번째 Todo :`, response.data);
  }
};
// const requestAPI2 = async () => {
//   let response = await axios.get(listUrl);
//   todoList = response.data;

//   console.log('# TodoList:', todoList);
//   for (let i = 0; i < todoList.length; i++) {
//     response = await axios.get(todoUrlPrefix + todoList[i].id);
//     console.log(`# ${i + 1}번째 Todo :`, response.data);
//   }
// };
requestAPI();
// requestAPI2();
</script>
