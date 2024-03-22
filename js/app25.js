const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let palabra = prompt('Ingrese un color');
palabra = palabra.toLocaleLowerCase();
let existe = 0;

array.forEach((color) => {
    if(color === palabra){
        existe++;
    };
});

if(existe==1){
    console.log('Si existe este color en el array');
}else{
    console.log('No existe este color en el array');
}