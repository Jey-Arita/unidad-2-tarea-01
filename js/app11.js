const frase = prompt('Ingrese una frase');
const mayuscula = frase.toUpperCase();

if(mayuscula[0] === frase[0]){
    console.log('Si empieza por Mayuscula');
}else{
    console.log('No empieza por mayuscula');
}
