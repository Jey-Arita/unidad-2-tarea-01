let numero = parseInt(prompt('Ingrese el numero para ver si es perfecto'));
let sumarDivisores = 0;
for (let i = 1; i < numero; i++) {
    if ((numero % i) === 0) {
        sumarDivisores += i;
    };
};

if (numero === sumarDivisores ) {
    console.log(`El ${numero} es un numero perfecto porque la suma de sus divisores es ${sumarDivisores}`);
}else{
    console.log('Este no es un numero perfecto');
}