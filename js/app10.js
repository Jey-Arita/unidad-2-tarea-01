let i=0;
let angulo = [];
alert('Ingrese los tres angulos para ver si el triangulo es valido o no')
while (i<3) {
    angulo[i] = parseInt(prompt(`Ingrese el angulo #${i+1}`));
    i++;
};

let suma = 0;
angulo.forEach((sumaAngulos) => { suma += sumaAngulos });

if( suma == 180){
    console.log('El angulo es valido');
}else{
    console.log('El angulo no es valido');
}
