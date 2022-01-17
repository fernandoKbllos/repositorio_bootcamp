"use strict"

console.log("hola ordenacion");

/* Escribe una función que ordene una array de números
 sin usar ninguna función integrada de javascript (como Array.sort())*/

let array_1 = [4, 10, 1];
/*let array_2 = [1, 11, 1, 11, 13, 12];
let array_3 = [15, 5, 7, 10, 13, 11, 14, 2, 10, 15];*/

function swap(array_1, i, j) {
	const tmp = array_1[i];
	array_1[i] = array_1[j];
	array_1[j] = tmp;
}


function sort(array_1) {
	const arrayCopy = [...array_1];

	for (let i=0; i<array_1.length; i++) {
		for (let j=0; j<array_1.length; j++) {
			if (arrayCopy[i] < arrayCopy[j]) swap(arrayCopy, i, j);
		}
	}

	return arrayCopy;
}

const sortedArray = sort(array_1);
console.log(sortedArray);


