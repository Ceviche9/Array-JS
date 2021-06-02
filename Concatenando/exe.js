const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

//Usando o Rest
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];

const a6 = [...a1, ...a2, ...['Mais elementos', 2, 5, 7, 8]];

console.log(a6);

