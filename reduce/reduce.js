const Lista = [];

function random(min, max){

    const rand = Math.random() * (max - min) + min
    return Math.floor(rand);
}

for (let i = 0; i <= 13; i++){

    const num = random(0, 15);
    Lista.push(num);

}
console.log(Lista);

//A função reduce serve para reduzir o array em um único elemento

//Some todos os números da Lista->

const total = Lista.reduce(function(acumulador, valor, indice, array){

    acumulador += valor
    console.log(acumulador, valor);
    return acumulador

//Valor inicial para o acumulador
}, 0)
//O acumulador pode ser um array, mas isso faria que o reduce se comportasse como map() ou filter().
console.log(total);

