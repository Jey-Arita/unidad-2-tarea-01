const arregloVacio = [];
console.log(arregloVacio);
let cantN = parseInt(prompt('Ingrese cuantos numero aleatorios quiere generar'))

for (let i = 0; i < cantN; i++) {
    arregloVacio[i] = parseInt(Math.random() * 100);
}

console.log(arregloVacio);

