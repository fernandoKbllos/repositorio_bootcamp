"use strict"
console.log(" hola otra vez")
/* 
definir una variable nombre, una variable edad
y sacar por consola la frase "Me llamo x y tengo x años" */

const datoUser = prompt("Hola. ¿Me puedes decir tu nombre?")


const cafe = confirm("¿ Quieres un café " + datoUser + "?");

if (cafe /* === true */) {
    console.log("Aquí tienes tu café ");
  } else {
    console.log("pues buenos dias entonces");
  }
  