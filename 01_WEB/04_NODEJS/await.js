import axios from 'axios';

async function init() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = response.data;
    const userWithIdOne = users.filter((user) => user.id === 1);

    console.log(userWithIdOne);
  } catch (err) {
    console.log(err);
  }
}

init();
