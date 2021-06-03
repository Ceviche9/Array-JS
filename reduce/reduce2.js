const pessoas = [

    {nome: 'Luiz', idade: 62}, //acumulador*

    {nome: 'Tundê', idade: 21},
    {nome: 'Carla', idade: 23},
    {nome: 'Nathan', idade: 44},
    {nome: 'Dudu', idade: 12},
    {nome: 'Gustavo', idade: 4},
    {nome: 'Levi', idade: 64}, //Agora esse é o acumulador 
    {nome: 'Leo', idade: 45},
    {nome: 'Caio', idade: 20},
    {nome: 'Leticia', idade: 70}, 

];

//Retorne a pessoa mais velha->

const velha = pessoas.reduce(function(acumulador, valor){

    if(acumulador.idade > valor.idade) return acumulador;
    //else
    return valor; 


//*Quando um valor não é passado para o acumulador, o primeiro elemento do acumulador se torna ele.
});

console.log(velha);

