function numPar(array) {
    return array.reduce(function(resultado, numero) {
      if (numero % 2 === 0) {
        resultado.push(numero);
      }
      return resultado;
    }, []);
  }
  
  const array = [];
  let nCant = parseInt(prompt('Ingrese el rango de 0 a:'));

for (let i = 0; i < nCant; i++) {
    array[i] = i+1;
};

console.log(array);
console.log(numPar(array));
  