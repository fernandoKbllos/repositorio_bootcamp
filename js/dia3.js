"use strict"

const patiens = [true, false, true, false, false, false, true, true];

console.log(patiens);


function virusv2(pacientes) {
    const pacientesCopia = [...pacientes];
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i - 1] /* ===true */ || pacientes[i + 1] /* ===true */) {
        pacientesCopia[i] = true;
      }
    }
  



