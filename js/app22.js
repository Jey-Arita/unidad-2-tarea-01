const array = [1,2,3,4,5,6];

console.log('Ciclo While');

let i = 0;
while (i < array.length) {
    console.log(`Posicion ${i} = ${array[i]}`);
    i++;
}

console.log('------------------------------------------------------------------------');
console.log('Ciclo For');

for (let i = 0; i < array.length; i++) {
    console.log(`Posicion ${i} = ${array[i]}`);
}

console.log('------------------------------------------------------------------------');
console.log('Ciclo forEach');

array.forEach((numero, index) => {
    console.log(`Posicion ${index} = ${numero}`);
});


console.log('------------------------------------------------------------------------');

array.forEach((numero, index) => {
    console.log(`Posicion ${index} = ${numero + 1}`);
});


console.log('------------------------------------------------------------------------');

const nuevoArray = array.map((numero) => numero + 1);
console.log(nuevoArray);

console.log('------------------------------------------------------------------------');

let suma = 0;
array.forEach((numero) => {
    suma += numero;
});

console.log('Promedio:' ,suma/(array.length));