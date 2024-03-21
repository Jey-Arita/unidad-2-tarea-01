let palabra = prompt('Ingrese una frase').toLowerCase();
const frase = palabra.split('');
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (palabra of frase) {
    switch (palabra) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

console.log('Cantidad "a":', contadorA);
console.log('Cantidad "e":', contadorE);
console.log('Cantidad "i":', contadorI);
console.log('Cantidad "o":', contadorO);
console.log('Cantidad "u":', contadorU);