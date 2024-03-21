let ramdon = 0;
while (ramdon < 1 || ramdon > 10) {
    ramdon = Math.round((Math.random()) * (10));
}

let usuario = parseInt(prompt('Intente adivinar el numero generado entre 1 y 10'));

if (usuario === ramdon) {
    alert('Buen trabajo')
}else{
    alert('Vuelva a intentarlo');
}
