"use strict"


const fruta = "fresa"
// fresa, manzana,platano, naranja
// Escribir con switch que diga que color es la fruta. no olvidar break



switch (fruta) {
    case "manzana":
        console.log("Las manzanas son de color");
        console.log("verdes");
        break;

     case "platano":
        console.log("Los platanos son de color ");
         console.log("amarillos");
         break;
         
     case "naranjas":
        console.log("Las naranjas son de color ");
         console.log("naranja");
         break;
     case "fresa":
         console.log("Las fresas son de color ");
         console.log("rojo");
         break;
         
     default :
         console.log("Ni es blanco, ni es tinto, ni tiene color")
         break;

}


