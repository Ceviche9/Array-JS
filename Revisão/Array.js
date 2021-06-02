// Revisão de Arrays

const nomes = ['Dudu' , 'Tundê', 'Carla', 'Levi'];

const novo = [...nomes];

const removido = novo.pop();
const primeiro = nomes.shift();
const novo2 = nomes.slice(1, 3);
nomes.push('final');
nomes.unshift('inicio');
console.log(nomes, primeiro);
console.log(nomes.length);
console.log(novo, removido);
console.log(novo2);