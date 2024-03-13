let num1 = parseInt(prompt('Ingrese primer numero'));
let num2 = parseInt(prompt('Ingrese segundo numero'));

if(num1 > num2){
    console.log(`El numero ${num1} es mayor que ${num2}`);
}else if(num1 === num2){
    console.log(`El numero ${num2} es igual que ${num1}`);
}else{
    console.log(`El numero ${num2} es mayor que ${num1}`);
}