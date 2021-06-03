//O for Each só está disponível dentro de arrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for(let valor of a1){

    console.log(valor);
}

a1.forEach((valor) => console.log(valor, indice))