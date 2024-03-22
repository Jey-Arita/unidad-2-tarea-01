const arreglo = [10,10,7,8,4];
let suma = 0;


arreglo.forEach((numero) => {
    suma += numero;
});

let prom = suma/(arreglo.length);

if(suma>0){
    console.log(`El promedio es: ${prom}`);
}else{
    console.log('Esta vacio');
}