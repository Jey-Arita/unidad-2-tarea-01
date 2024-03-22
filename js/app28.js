function sacarVocales(arreglo) {
  return arreglo.filter(palabra => {
    if(vocales.includes(palabra.charAt(0))){
        return nuevoArreglo.push(palabra);
    }
  });
}

let palabra = prompt('Ingrese una frase').toLowerCase();
palabra = palabra.split(' ');
const vocales = ['a', 'e', 'i', 'o', 'u'];
const nuevoArreglo = [];
sacarVocales(palabra);

console.log(nuevoArreglo);