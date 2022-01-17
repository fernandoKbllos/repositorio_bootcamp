"use strict"

console.log("hello today");

// Escribe una función que, al recibir un array como parámetro,// 
//elimine las strings repetidas del mismo.//

const names = [
    "A-Jay",
    "Manuel",
    "Manuel",
    "Eddie",
    "A-Jay",
    "Su",
    "Reean",
    "Manuel",
    "A-Jay",
    "Zacharie",
    "Zacharie",
    "Tyra",
    "Rishi",
    "Arun",
    "Kenton",
  ];

  console.log(names);


const sinRepetir = [... new Set (names)];

console.log(sinRepetir);

//const sinRepetir = names.filter( (ele, index)=>names.indexOf(ele) === index);

//console.log(sinRepetir);

