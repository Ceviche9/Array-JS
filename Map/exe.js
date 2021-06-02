//Exercícios com Map:

const pessoas = [

    {nome: 'Luiz', idade: 62},
    {nome: 'Tundê', idade: 21},
    {nome: 'Carla', idade: 23},
    {nome: 'Nathan', idade: 44},
    {nome: 'Dudu', idade: 12},
    {nome: 'Gustavo', idade: 4},
    {nome: 'Levi', idade: 54},
    {nome: 'Leo', idade: 45},
    {nome: 'Caio', idade: 20},
    {nome: 'Leticia', idade: 70},

];

//Para cada elemento retorne apenas uma string com o noe da pessoa->
const nomes = pessoas.map(obj => obj['nome'])
console.log(nomes);

//Adicione uma chave de ID em cada obj->

const ID = pessoas.map(function(obj, indice){
    
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
    
});

console.log(ID);

//Remova apenas a chave nome do obj->

const idades = pessoas.map(function(obj) {

    const newObj = {...obj}
    delete newObj.nome;
    return newObj
});

console.log(idades);


