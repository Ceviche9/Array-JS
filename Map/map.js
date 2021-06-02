//Similar ao Filter, mas muda no seu retorno, pois altera os valores do array.
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

//Utilizando o Map()->
//O map sempre vai ter o mesmo tamanho do array original.

//Dobre os número da lista->

const dobro = Lista.map(valor => valor * 2)

console.log(dobro);



