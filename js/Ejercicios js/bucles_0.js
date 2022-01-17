"use strict"

console.log("hello bucles");

/*Escribe una función que encuentre todos los números capicúa no primos
 comprendidos en un rango (a determinar por los parámetros que se le pasen)*/

 /*function primo(numero) {

    for (let i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }

  console.log(primo(4));*/
  /*soloPrimos = []*/

  function numerosPrimos(min,max) {

    for (let i = min; i <= max; i++) {
        const num = [];
        if ( i % i === 0) {
            return num
        }
        }
  }
  const num = numerosPrimos(1,10);
  console.log(num);

  /*const nums = [6, 8, 10, 25];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}*/


  



