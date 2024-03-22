function invertirArreglo(arreglo) {    
    for (let i = arreglo.length - 1; i >= 0; i--) {
      arregloInvertido.push(arreglo[i]);
    }
    return arregloInvertido;
  }
  
  const numeros = [1,2,3,4,5,6,7,8];
  const arregloInvertido = [];
  console.log(numeros);
  console.log(invertirArreglo(numeros));