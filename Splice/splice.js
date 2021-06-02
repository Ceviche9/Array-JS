
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3);

//simulando o pop->
const remov1 = nomes.splice(-1, 1);
console.log(nomes, remov1);

//simulando o shift->
const remov2 = nomes.splice(0, 1);
console.log(nomes, remov2);

//simulando o push->
const adc = nomes.splice(nomes.length, 0, 'Adicionar');
console.log(nomes, adc);

//simulando o unshift->
const adc2 = nomes.splice(0, 0, 'primeiro');
console.log(nomes,adc2);