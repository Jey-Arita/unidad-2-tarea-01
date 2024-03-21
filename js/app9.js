let numero = prompt('Ingrese un numero');
numero = numero.split('');

if (isNaN(parseInt(numero[0]))) {
    console.log('El string empieza por una letra');
}else{
    console.log('El string empieza por un numero');
}