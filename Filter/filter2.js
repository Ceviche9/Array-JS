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

//Retorne as pessoa que tem o nome com 5 letras ou mais->
const cincoMais = pessoas.filter((obj) => obj.nome.length >= 5)
console.log(cincoMais);

//Retorne as pessoas com mais de 50 anos->
const velhos = pessoas.filter(obj => obj.idade >= 50)
console.log(velhos);

//Retorne as pessoas cujo o nome termina com a->

const terminaComA = pessoas.filter((obj) =>obj.nome.toLowerCase().endsWith('a'))
console.log(terminaComA);


