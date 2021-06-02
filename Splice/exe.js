//               -5       -4      -3       -2       -1
//                0        1       2       3         4
const lista = ['Tundê', 'Dudu', 'Carla', 'Levi', 'Nathan'];


//Simulando o pop()->
const remover = lista.splice(-1, 1);
console.log(lista, remover);

//simulando o shift()->
const remover2 = lista.splice(0, 1);
console.log(lista, remover2);

//Simulando o push()->
const add = lista.splice(lista.length, 0, 'Carlos');
console.log(lista, add);

//Simulando o unshift()->
const primeiro = lista.splice(0, 0, 'Primeiro');
console.log(lista,primeiro);

