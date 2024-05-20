import fs from 'fs';

const data = fs.readFileSync('./example.txt', 'utf-8');
console.log(data);
