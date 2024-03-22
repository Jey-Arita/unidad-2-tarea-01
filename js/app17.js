let primerNum = parseInt(prompt('Ingrese el primer numero donde se inicia la suma'));
let segundoNum = parseInt(prompt('Ingrese donde finalizara la suma'));

let i = primerNum;
let suma = 0;
while (i <= segundoNum) {
    if((i % 2) == 0){
        suma += i;
    }
    i++;
};
console.log('La suma de todos los numeros pares son:', suma);
