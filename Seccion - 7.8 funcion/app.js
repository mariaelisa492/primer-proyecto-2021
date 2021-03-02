
function masLargo (arr) {

let nombreLargo = '';


for (let i = 0; i < arr.length; i++){

     let nombre = arr [i];
     if (nombre.length > nombreLargo.length) {
          nombreLargo = nombre;
     }

}


return nombreLargo;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

let heroeLargo = masLargo( heroes );

console.log( heroeLargo ); // Profesor Charles Xavier




