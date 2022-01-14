"use strict";
console.log("Hola dia 5");

const animales = ["perro", "gato", "pajaro", "gato", "gato", "pajaro", "perro"];
/*
 * Transfomar el array de animales para que ponga el sonido que hacen
 *en lugar del nombre del animal ["guau", "miau", "pio", "miau", "miau", "pio", "guau"]
 *
 * Obtener un array nuevo en el que solo haya gatos (a partir del array de animales)
 *
 * Obtener un array nuevo en el que no haya perros ( a partir del array de animales)
 *
 * Obtener el total de perros
 */


 console.log(animales);

 const soloGatos = animales.filter((animales) => animales === "gato");

 console.log(soloGatos);

 const sinPerros = animales.filter((animales) => animales !== "perro")

 console.log(sinPerros);

 const totalPerros = ( (animales[]) - (sinPerros []));

 console.log(totalPerros);
