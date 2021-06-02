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


//Lista com os valores maiores que 10->
const maior = [];

for (let valor of Lista){

    if(valor > 10) {

        maior.push(valor);

    }

}
console.log(maior);

//Filter -> Filtra o Array.
//Usando Filter()->
//                                Função de Callback
const numFiltrados = Lista.filter(valor => valor > 10)
//QUando a função so tem uma linha o return é implícito
console.log(numFiltrados);