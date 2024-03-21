let string = prompt('Ingrese una palabra');
string = string.toLowerCase();
let frase = string.split('');

let contador = 0;

frase.forEach((letra) => {
    if (letra.includes('a')) {
        contador++;
    }
});

console.log(`La letra 'a' sale ${contador} veces`);
