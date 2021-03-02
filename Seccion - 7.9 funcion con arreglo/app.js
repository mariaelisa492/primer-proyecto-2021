
function filtrarPorLetra (arr, letra) {


let nuevoArr = [];

for (let i = 0; i < arr.length; i++) {

let nombre = arr[i];

if (nombre [0]===letra) {
     nuevoArr.push(nombre);
}
     

}

     return nuevoArr;
}



let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let heroesCon = filtrarPorLetra( heroes, 'C');


console.log( heroesCon ); // She Hulk, Spiderman


