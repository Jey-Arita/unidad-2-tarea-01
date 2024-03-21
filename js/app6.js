let numero = parseInt(prompt('Ingrese un numero'));
const divisores = [];
for (let i = 1; i <= numero; i++) {
     if ((numero % i) == 0) {
        divisores.push(i);
     }
}

alert(`Los divisores del numero ${numero} son ${divisores}`);