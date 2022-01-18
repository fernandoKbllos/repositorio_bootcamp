"use strict";



// SOLUCION 1 //

/*function rickYmorty(id) {
    const data = fetch("https://rickandmortyapi.com/api/character/" + id);

    data.then((res)=> {
        res.json().then((res) => {
            console.log(res.name);
        });
    });
}
 
rickYmorty(87)*/

//SOLUCION 2 //


/*const url = "https://rickandmortyapi.com/api/character/";

async function getData(id) {

    const res = await fetch(url);
    const json = await res.json();

    console.log(json);
    return json;


    async function getData(url){
    const res = await fetch(url);
    const json = await res.json();
    return json
    }
}

/*getData ("https://rickandmortyapi.com/api/character/272");*/

//Función que nos de el nombre del 4º personaje que aparezca
//en el cap.10
//el nº del capitulo será el parametro de la función

/*async function character4(Episode,char) {
    const epData = await getData("https://rickandmortyapi.com/api/episode/" + Episode );

    const charlist = epData.characters;

    const charUrl  = charlist[char];

    const charData = await getData(charUrl);

    const charName = charData.name;

    console.log(charName);*/

}

/*async function getCharName(num) { 
    const data = await getData(url);
    //const charlist = data.results;//

}  */


// Crear una funcion prompt para introducir un numero correspondiente
// a una casa ( juego de tronos)
//la funcion debe devolver por consola el nombre del Lord (currentlord)
// y sus titulos cada uno en una linea

const trones = fench ("https://anapioficeandfire.com/api/houses/")