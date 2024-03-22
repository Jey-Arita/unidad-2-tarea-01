function numMinimo(arreglo) {
    let menor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < menor) {
        menor = arreglo[i];
      }
    }
    if(menor < 0){
        return `El numero es negativo, este es su valor adsoluto: ${menor * -1}`;
    }else{
        return menor;
    }
}

const arreglo = [10,9,8,4,2,5,6,1,3,7];
console.log(numMinimo(arreglo));
