let fs=require('fs');

let data=fs.readFileSync('./package.json','utf-8');

console.log(data);