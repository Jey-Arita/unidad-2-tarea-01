let primerNum = parseInt(prompt('Ingrese el primer numero donde se inicia la suma'));
let segundoNum = parseInt(prompt('Ingrese donde finalizara la suma'));

let suma = 0;

for (let i = primerNum; i < segundoNum; i++) {
    if((i % 2) == 0){
        suma += i;
    }   
};
console.log('La suma de todos los numeros pares son:', suma);