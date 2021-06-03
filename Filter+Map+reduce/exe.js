const Lista = [];

function random(min, max){

    const rand = Math.random() * (max - min) + min
    return Math.floor(rand);
}

for (let i = 0; i <= 13; i++){

    const num = random(0, 100);
    Lista.push(num);

}
console.log(Lista);

//Retorne a soma do dobro de todos os pares->
//1) Filtrar pares->
const filtro = Lista.filter(valor => valor % 2 === 0)
console.log(filtro);

//2) Dobrar os valores->
const dobro = filtro.map(valor => valor * 2)
console.log(dobro);

//3)-> Reduzir (somar tudo)->
const soma = dobro.reduce(function(acumulador,valor){

    acumulador += valor
    return acumulador

},0)

console.log(soma);

