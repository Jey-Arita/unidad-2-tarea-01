function numEntero(Numero) {
    if (Number.isInteger(Numero)) {
        console.log('Es un numero entero');
    }else{
        console.log('Se ingreso otro tipo de dato o no es entero el numero');
    }
};

let numero = prompt('Ingrese el numero');
numero = parseFloat(numero);
numEntero(numero);