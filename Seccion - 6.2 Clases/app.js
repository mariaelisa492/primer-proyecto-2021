


class Carro {

    constructor (marca1, tipo1, puertas){

        this.marca = marca1;
        this.tipo = tipo1; 
        this.puertas = puertas;

        this.creadoEn = 'Hoy'
        this.encendido = false
        this.gasolina = 100;


    }
    encenderCarro () {

        if (this.encendido){
console.error ('el carro ya estaba encendido, se daño el motor')
        } else {
            this.encendido = true;
            console.log ('el motor esta encendido');
        }
        
        return this;
    }

    realizarViaje (consumo) {

if (!this.encendido) return console.log ('carro apagado');

if (consumo > this.gasolina) return console.log ('no puedo realizar el viaje gasolina en:' + this.gasolina);


     this.gasolina = this.gasolina - consumo;
     return 'Le queda ' + this.gasolina;
}

  } 

        



let carro = new Carro ('Mazda', 'Sedan', 2)


console.log (carro);